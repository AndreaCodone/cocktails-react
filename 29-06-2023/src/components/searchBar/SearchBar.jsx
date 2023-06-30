import "./index.css";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Cerca..." />
      <button type="submit">Cerca</button>
    </form>
  );
};

export default SearchBar;

// import { useState } from "react";
// import { BASE_URL, filterItems } from "./utils/https.js";
// import "./index.css";

// export default function FilterList() {
//   const [query, setQuery] = useState("");
//   const results = filterItems(BASE_URL, query);

//   function handleChange(e) {
//     setQuery(e.target.value);
//   }

//   return (
//     <>
//       <SearchBar query={query} onChange={handleChange} />
//       <hr />
//       <List items={results} />
//     </>
//   );
// }

// function SearchBar({ query, onChange }) {
//   return (
//     <label>
//       Search: <input value={query} onChange={onChange} />
//     </label>
//   );
// }

// function List({ data }) {
//   return (
//     <table>
//       <tbody>
//         {items.map((data) => (
//           <tr key={data.id}>
//             <td>{data.name}</td>
//             <td>{data.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
