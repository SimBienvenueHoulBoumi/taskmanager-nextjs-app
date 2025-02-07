import React, { useState } from "react";
import { BsCheckCircle, BsPlay } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const fakeAnimeData = [
  {
    id: 1,
    title: "Attack on Titan",
    season: 4,
    episodesWatched: 16,
    totalEpisodes: 25,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "One Piece",
    season: 1,
    episodesWatched: 1050,
    totalEpisodes: 1100,
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    season: 2,
    episodesWatched: 23,
    totalEpisodes: 24,
    status: "Completed",
  },
  {
    id: 4,
    title: "Demon Slayer",
    season: 3,
    episodesWatched: 11,
    totalEpisodes: 11,
    status: "Completed",
  },
  {
    id: 5,
    title: "Death Note",
    season: 1,
    episodesWatched: 37,
    totalEpisodes: 37,
    status: "Completed",
  },
  {
    id: 6,
    title: "Chainsaw Man",
    season: 1,
    episodesWatched: 12,
    totalEpisodes: 12,
    status: "Completed",
  },
  {
    id: 7,
    title: "Naruto Shippuden",
    season: 1,
    episodesWatched: 500,
    totalEpisodes: 500,
    status: "Completed",
  },
  {
    id: 8,
    title: "Bleach: TYBW",
    season: 1,
    episodesWatched: 26,
    totalEpisodes: 26,
    status: "Completed",
  },
  {
    id: 9,
    title: "Vinland Saga",
    season: 2,
    episodesWatched: 24,
    totalEpisodes: 24,
    status: "Completed",
  },
  {
    id: 10,
    title: "Tokyo Revengers",
    season: 3,
    episodesWatched: 13,
    totalEpisodes: 13,
    status: "Completed",
  },
];

export default function CustomTable() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [statusFilter, setStatusFilter] = useState(""); // New state for status filter

  // Filter by search query and selected status
  const filteredData = fakeAnimeData.filter((anime) => {
    const matchesSearch = anime.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? anime.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  // Sorting data
  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") return a.title.localeCompare(b.title);
    return b.title.localeCompare(a.title);
  });

  const pageCount = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Anime List</h2>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 input input-bordered border-2 border-gray-300 rounded-md input-sm focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Filter by status */}
          <select
            className="px-4 py-2 border rounded-lg"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Table with Horizontal Scroll and Fixed Height */}
      <div className="overflow-x-auto max-h-96 overflow-y-auto">
        <table className="w-full table table-auto text-left">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border-b-2 w-1/4">Title</th>
              <th className="p-2 border-b-2 w-1/4">Season</th>
              <th className="p-2 border-b-2 w-1/4">Episodes Watched</th>
              <th className="p-2 border-b-2 w-1/4">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((anime) => (
              <tr
                key={anime.id}
                className="hover:bg-gray-100 transition-all duration-300 ease-in-out border-b-2"
              >
                <td className="px-2 py-3 text-sm font-medium text-gray-900">
                  {anime.title}
                </td>
                <td className="px-2 py-3 text-sm font-medium text-gray-600">
                  {anime.season}
                </td>
                <td className="px-2 py-3 text-sm font-medium text-gray-600">
                  {anime.episodesWatched} / {anime.totalEpisodes}
                </td>
                <td className="px-2 text-sm font-medium">
                  <span className="py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    {anime.status === "Ongoing" ? (
                      <BsPlay className="text-sm text-blue-500" />
                    ) : (
                      <BsCheckCircle className="text-sm text-green-500" />
                    )}
                    {anime.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={"◀"}
          nextLabel={"▶"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-1 text-xs"}
          activeClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
          pageClassName={"px-2 py-1 border-b-2 rounded cursor-pointer"}
          previousClassName={"px-2 py-1 border-b-2 rounded cursor-pointer"}
          nextClassName={"px-2 py-1 border-b-2 rounded cursor-pointer"}
        />
      </div>
    </div>
  );
}
