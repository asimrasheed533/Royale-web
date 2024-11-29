import React from "react";
import "@/style/listing.scss";
import ListingHeaderEntry from "./ListingHeaderEntry";
import ListingPagination from "./ListingPagination";
import ListingCheckbox from "./ListingCheckbox";

interface HeaderItem {
  key: string;
  name: string;
  hasImage?: boolean;
}

interface ListingTableProps {
  children: React.ReactNode;
  selectedRows: string[]; // Assuming IDs are strings, update to number[] if they are numbers
  setSelectedRows: (rows: string[]) => void;
  totalPages: number;
  sortData: string; // Adjust type if sortData is more complex
  setSortData: (sortKey: string) => void;
  headerItem: HeaderItem[];
  data: { id: string; [key: string]: any }[]; // Replace `any` with a more specific type for your data structure
}

const ListingTable: React.FC<ListingTableProps> = ({
  children,
  selectedRows,
  setSelectedRows,
  totalPages,
  sortData,
  setSortData,
  headerItem,
  data,
}) => {
  return (
    <div className="listing__page__table">
      <div className="listing__page__table__scrollable">
        <div className="listing__page__table__header">
          <ListingHeaderEntry className="checkbox">
            <ListingCheckbox
              checked={selectedRows.length > 0}
              partiallyChecked={
                selectedRows.length > 0 && selectedRows.length < data.length
              }
              onClick={() => {
                if (selectedRows.length === data.length) {
                  setSelectedRows([]);
                } else {
                  setSelectedRows(data.map((item) => item.id));
                }
              }}
            />
          </ListingHeaderEntry>
          {headerItem?.map((item) => (
            <ListingHeaderEntry
              key={item.key}
              sortKey={item.key}
              hasImage={item.hasImage}
            >
              {item.name}
            </ListingHeaderEntry>
          ))}
        </div>
        <div className="listing__page__table__content">{children}</div>
      </div>
      {totalPages > 0 && (
        <div className="listing__page__table__footer">
          <div className="listing__page__table__footer__stats">
            {selectedRows.length > 0 && (
              <div className="listing__page__table__footer__stats__entry">
                {selectedRows.length} Selected
              </div>
            )}
            <div className="listing__page__table__footer__stats__entry">
              {data?.length} Entries
            </div>
          </div>
          <ListingPagination
            currentPage={1}
            totalPages={totalPages}
            onPageChange={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default ListingTable;
