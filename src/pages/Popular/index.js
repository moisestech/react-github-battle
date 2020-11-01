import "./popular.css";
import { useState, useEffect, useReducer, useRef } from "react";

// API
import { fetchPopularRepos } from "../../utils/api";

// COMPONENTS
import LanguagesNav from "./components/LanguagesNav";
import ReposGrid from "./components/ReposGrid";
import Loading from "../../components/Loading";

function popularReducer(state, action) {
  if (action.type === "success") {
    return {
      ...state,
      [action.selectedLanguage]: action.repos,
      error: null,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.error.message,
    };
  } else {
    throw new Error(`'That action type isn't supported.`);
  }
}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [state, dispatch] = useReducer(popularReducer, { error: null });

  const fetchedLanguages = useRef([]);

  useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then((repos) => dispatch({ type: "success", selectedLanguage, repos }))
        .catch((error) => dispatch({ type: "error", error }));
    }
  }, [fetchedLanguages, selectedLanguage]);

  const isLoading = () => !state[selectedLanguage] && state.error === null;

  return (
    <>
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={setSelectedLanguage}
      />

      {isLoading() && <Loading text="Fetching Repos" />}

      {state.error && <p className="center-text error">{state.error}</p>}

      {state[selectedLanguage] && <ReposGrid repos={state[selectedLanguage]} />}
    </>
  );
}
