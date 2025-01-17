"use client";
import headerItems from "@/data/headerItems.json";
import { orders as data, orders } from "@/constant/mocks";
import { useState } from "react";
import Link from "next/link";
import ListingTabs from "@/components/ListingTabs";
import ListingTable from "@/components/ListingTable";
import ListingCheckbox from "@/components/ListingCheckbox";
import { usePathname } from "next/navigation";
export default function Orders() {
  console.log("order", orders);
  const pathname = usePathname();
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(3);
  return (
    <div className="listing__page">
      <div className="listing__page__header">
        <ListingTabs
          selectedTab="Orders"
          setSelectedTab={() => {}}
          tabs={[{ name: "Orders", number: data.length }]}
        />
        <div className="listing__page__header__actions">
          {/* <SearchInput value={search} onChange={setSearch} /> */}
        </div>
      </div>
      <ListingTable
        data={[]}
        headerItems={headerItems.Orders}
        selectedRows={selectedRows}
        // setSelectedRows={setSelectedRows}
        // page={page}
        // setPage={setPage}
        totalPages={10}
      >
        {data.map((item) => (
          <Link
            className="listing__page__table__content__row"
            href={pathname + "/" + item.id}
            key={item.id}
          >
            <div className="listing__page__table__content__row__entry checkbox">
              <ListingCheckbox
                partiallyChecked={false}
                checked={false}
                onClick={() => {}}
              />
            </div>

            <div className="listing__page__table__content__row__entry">
              {item.name}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.quantity}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.price}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.status}
            </div>
          </Link>
        ))}
      </ListingTable>
    </div>
  );
}
