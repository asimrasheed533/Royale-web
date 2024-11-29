"use client";
import "@/style/listing.scss";
import React, { useState } from "react";
import SearchInput from "@/components/SearchInput";

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
