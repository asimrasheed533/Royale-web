"use client";
import ListingTable from "@/components/ListingTable";
import "@/style/listing.scss";
import { order as data } from "@/constant/mocks";
import React, { useState } from "react";
import Link from "next/link";
import ListingCheckbox from "@/components/ListingCheckbox";
// import headerItem from "@/constant/headerItem";
export default function orderHistory() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <>
      <ListingTable
        // headerItem={headerItem.order}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        page={page}
        setPage={setPage}
      >
        {data.map((item) => (
          <Link
            // href={pathname + "/" + item.id}
            href={"/"}
            key={item.id}
            className="listing__page__table__content__row"
          >
            <div className="listing__page__table__content__row__entry checkbox">
              <ListingCheckbox
                checked={selectedRows.includes(item.id)}
                onClick={() => {
                  if (selectedRows.includes(item.id)) {
                    setSelectedRows(
                      selectedRows.filter((row) => row !== item.id)
                    );
                  } else {
                    setSelectedRows([...selectedRows, item.id]);
                  }
                }}
              />
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.number}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.logo && (
                <img
                  loading="lazy"
                  src={item.logo}
                  alt="logo"
                  className="listing__page__table__content__row__entry__img"
                />
              )}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.city}
            </div>
          </Link>
        ))}
      </ListingTable>
    </>
  );
}
