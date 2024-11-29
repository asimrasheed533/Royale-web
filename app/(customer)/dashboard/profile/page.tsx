"use client";
import ListingTable from "@/components/ListingTable";
import "@/style/listing.scss";
import { order as data } from "@/constant/mocks";
import React, { useState } from "react";
import ListingCheckbox from "@/components/ListingCheckbox";
import SearchInput from "@/components/SearchInput";
import headerItem from "@/data/headerItems.json";

export default function Profile() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // Assuming selected rows are represented by IDs (numbers).
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(10);
  return (
    <>
      <div className="listing__page__header__actions">
        <SearchInput
          value={search}
          onChange={(value: string) => setSearch(value)}
        />
      </div>
    </>
  );
}
