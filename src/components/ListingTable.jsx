import listing from "@/style/listing.scss";
import headerItem from "@/constant/headerItem";
import ListingHeaderEntry from "./ListingHeaderEntry";
import ListingPagination from "./ListingPagination";
export default function ListingTable({
  children,
  actions,
  selectedRows,
  setSelectedRows,
  page,
  setPage,
  sortData,
  setSortData,
  headerItem,
  data,
}) {
  return (
    <div className="listing__page__table">
      <div className="listing__page__table__scrollable">
        {/* <ListingActionBar selectedItems={selectedRows.length}>
          {actions.map((action) => (
            <button
              key={action.name}
              className={`listing__page__table__actions__button ${
                action.danger ? "danger" : ""
              }`}
              onClick={() => {
                setSelectedRows([]);
                action.onClick();
              }}
            >
              {action.icon}
              {action.name}
            </button>
          ))}
        </ListingActionBar> */}
        <div className="listing__page__table__header">
          {/* <ListingHeaderEntry className="checkbox">
            <ListingCheckbox
              checked={selectedRows.length === data.length}
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
          </ListingHeaderEntry> */}
          {headerItem?.map((item) => (
            <ListingHeaderEntry
              key={item.key}
              sortKey={item.key}
              sortData={sortData}
              onSort={(value) => setSortData(value)}
              hasImage={item.hasImage}
            >
              {item.name}
            </ListingHeaderEntry>
          ))}
        </div>
        <div className="listing__page__table__content">{children}</div>
      </div>
      <div className="listing__page__table__footer">
        <div className="listing__page__table__footer__stats">
          <div className="listing__page__table__footer__stats__entry">
            {selectedRows.length} selected
          </div>
          <div className="listing__page__table__footer__stats__entry">
            {data?.length} data
          </div>
        </div>
        <ListingPagination
          currentPage={page}
          totalPages={data?.length / 10}
          // totalPages={10}
          onPageChange={(value) => setPage(value)}
        />
      </div>
    </div>
  );
}
