// import React from "react";
// import "./searchFeed.css";
// import fetchFromAPI from "../../utils/fetchFromAPI";
// import { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { SearchVideoCard, SearchChannelCard, BackdropComponent } from "../";

// export default function SearchFeed(props) {
//   const [open, setOpen] = useState(false);
//   const { searchTerm } = useParams();
//   const [searchResults, setSearchResults] = useState([]);

//   const scrollDiv = useRef();

//   let newResults = 10;

//   //!Когато сменим searchTerm и влезем компонента се mount-не наново - първоначални 20 резултата
//   useEffect(() => {
//     console.log("NEW search term: " + searchTerm);
//     scrollDiv.current.scrollTo(0, 0);
//     fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=5`).then(
//       (data) => {
//         setOpen(false);
//         setSearchResults(data.items);
//       }
//     );
//   }, [searchTerm]);

//   const loadMoreSearchResults = () => {
//     setOpen(true);
//     console.log("load more search results with search term: " + searchTerm);
//     fetchFromAPI(
//       `/search?part=snippet&q=${searchTerm}&maxResults=${newResults}`
//     ).then((data) => {
//       setOpen(false);

//       setSearchResults((oldResults) => [
//         ...oldResults,
//         ...data.items.slice(oldResults.length + 1),
//       ]);
//     });
//     newResults += 5;
//   };

//   const handleScroll = () => {
//     // console.log(scrollDiv.current.scrollHeight);
//     // console.log(scrollDiv.current.offsetHeight);
//     // console.log(scrollDiv.current.scrollTop);
//     //const endOfPage = scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight === scrollDiv.current.scrollTop;

//     // console.log(scrollDiv.current.innerHeight);
//     // console.log(scrollDiv.current.pageYOffset);
//     // console.log(scrollDiv.current.offsetHeight);
//     //const endOfPage = scrollDiv.current.innerHeight + scrollDiv.current.pageYOffset >= scrollDiv.current.offsetHeight;

//     console.log(scrollDiv.current.scrollHeight);
//     console.log(scrollDiv.current.scrollTop);
//     console.log(scrollDiv.current.clientHeight);
//     const endOfPage =
//       scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <=
//       scrollDiv.current.clientHeight;

//     if (endOfPage) {
//       // console.log("load next search results");
//       // console.log(searchTerm);
//       loadMoreSearchResults();
//     }
//   };

//   //!The problem is that scrollDiv.current is mutable, so by the time the cleanup function runs, it may have been set to null.
//   //!The solution is to capture any mutable values inside the effect:
//   useEffect(() => {
//     const instanceOfRef = scrollDiv.current;
//     scrollDiv.current.addEventListener("scroll", handleScroll);
//     return () => {
//       instanceOfRef.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="searchFeedMainContainer">
//       <BackdropComponent open={open} />

//       <div className="searchCardContainer">
//         <div className="searchCardsScrollContainer" ref={scrollDiv}>
//           {searchResults.map((searchResult, idx) => {
//             if (searchResult.id.videoId) {
//               //значи е видео, а не канал
//               return <SearchVideoCard video={searchResult} key={idx} />;
//             } else {
//               return (
//                 <SearchChannelCard channelDetails={searchResult} key={idx} />
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import "./searchFeed.css";
// import fetchFromAPI from "../../utils/fetchFromAPI";
// import { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { SearchVideoCard, SearchChannelCard, BackdropComponent } from "../";

// export default function SearchFeed(props) {
//   const [open, setOpen] = useState(false);
//   const { searchTerm } = useParams();
//   const [searchResults, setSearchResults] = useState([]);

//   const scrollDiv = useRef();

//   let newResults = 10;

//   //!Когато сменим searchTerm и влезем компонента се mount-не наново - първоначални 20 резултата
//   useEffect(() => {
//     console.log("NEW search term: " + searchTerm);
//     scrollDiv.current.scrollTo(0, 0);
//     fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=5`).then(
//       (data) => {
//         setOpen(false);
//         setSearchResults(data.items);
//       }
//     );
//   }, [searchTerm]);

//   const loadMoreSearchResults = () => {
//     setOpen(true);
//     const updatedSearch = window.location.pathname.split("/search/")[1];
//     //it used to fetch with searchTerm, i made it so it fetches with updatedSearch
//     console.log("load more search results with search term: " + updatedSearch);
//     fetchFromAPI(
//       `/search?part=snippet&q=${updatedSearch}&maxResults=${newResults}`
//     ).then((data) => {
//       setOpen(false);

//       setSearchResults((oldResults) => [
//         ...oldResults,
//         ...data.items.slice(oldResults.length + 1),
//       ]);
//     });
//     newResults += 5;
//   };

//   const handleScroll = () => {
//     // console.log(scrollDiv.current.scrollHeight);
//     // console.log(scrollDiv.current.offsetHeight);
//     // console.log(scrollDiv.current.scrollTop);
//     //const endOfPage = scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight === scrollDiv.current.scrollTop;

//     // console.log(scrollDiv.current.innerHeight);
//     // console.log(scrollDiv.current.pageYOffset);
//     // console.log(scrollDiv.current.offsetHeight);
//     //const endOfPage = scrollDiv.current.innerHeight + scrollDiv.current.pageYOffset >= scrollDiv.current.offsetHeight;

//     console.log(scrollDiv.current.scrollHeight);
//     console.log(scrollDiv.current.scrollTop);
//     console.log(scrollDiv.current.clientHeight);
//     const endOfPage =
//       scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <=
//       scrollDiv.current.clientHeight;

//     if (endOfPage) {
//       loadMoreSearchResults();
//     }
//   };

//   //!The problem is that scrollDiv.current is mutable, so by the time the cleanup function runs, it may have been set to null.
//   //!The solution is to capture any mutable values inside the effect:
//   useEffect(() => {
//     const instanceOfRef = scrollDiv.current;
//     scrollDiv.current.addEventListener("scroll", handleScroll);
//     return () => {
//       instanceOfRef.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="searchFeedMainContainer">
//       <BackdropComponent open={open} />

//       <div className="searchCardContainer">
//         <div className="searchCardsScrollContainer" ref={scrollDiv}>
//           {searchResults.map((searchResult, idx) => {
//             if (searchResult.id.videoId) {
//               //значи е видео, а не канал
//               return <SearchVideoCard video={searchResult} key={idx} />;
//             } else {
//               return (
//                 <SearchChannelCard channelDetails={searchResult} key={idx} />
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

//!Слави вариант с малка корекция при newResults - вече е част от state-а, а не проста променлива
import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../../utils/fetchFromAPI";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { SearchVideoCard, SearchChannelCard, BackdropComponent } from "../../../Components";

export default function SearchFeed(props) {
  const [open, setOpen] = useState(false);
  const { searchTerm } = useParams();

  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyWord, setSearchKeyword] = useState(searchTerm);
  const scrollDiv = useRef();
  const [endOfPage, setEndOfPage] = useState(false);
  const [newResults, setNewResults] = useState(10);

  useEffect(() => {
    setSearchKeyword(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setNewResults(10);
    console.log("NEW search term: " + searchKeyWord);
    scrollDiv.current.scrollTo(0, 0);
    fetchFromAPI(`/search?part=snippet&q=${searchKeyWord}&maxResults=5`).then(
      (data) => {
        setOpen(false);
        setSearchResults(data.items);
      }
    );
  }, [searchKeyWord]);

  useEffect(() => {
    if (endOfPage) {
      loadMoreSearchResults();
      setEndOfPage(false);
    }
  }, [endOfPage]);

  const loadMoreSearchResults = () => {
    console.log(newResults);
    setOpen(true);
    fetchFromAPI(
      `/search?part=snippet&q=${searchKeyWord}&maxResults=${newResults}`
    ).then((data) => {
      console.log(data.items);
      setOpen(false);
      setSearchResults((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length + 1),
      ]);
    });
    setNewResults(newResults + 5);
  };

  const handleScroll = () => {
    if (
      scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <=
      scrollDiv.current.clientHeight
    ) {
      setEndOfPage(true);
    }
  };

  //!The problem is that scrollDiv.current is mutable, so by the time the cleanup function runs, it may have been set to null.
  //!The solution is to capture any mutable values inside the effect:
  useEffect(() => {
    const instanceOfRef = scrollDiv.current;
    scrollDiv.current.addEventListener("scroll", handleScroll);
    return () => {
      instanceOfRef.removeEventListener("scroll", handleScroll);
    };
  }, [searchTerm]);

  return (
    <div className="searchFeedMainContainer">
      <BackdropComponent open={open} />
      <div className="searchCardContainer">
        <div className="searchCardsScrollContainer" ref={scrollDiv}>
          {searchResults.map((searchResult, idx) => {
            if (searchResult.id.videoId) {
              //значи е видео, а не канал
              return <SearchVideoCard video={searchResult} key={idx} />;
            } else {
              return (
                <SearchChannelCard channelDetails={searchResult} key={idx} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
