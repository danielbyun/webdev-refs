import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    error: "",
    success: false,
    searchField: "",
  };
  it("Should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: "",
    });
  });

  it("Should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({
      ...initialStateSearch,
      searchField: "abc",
    });
  });
});

describe("requestRobots", () => {
  const initialSearchRobots = {
    error: "",
    success: false,
    robots: [],
    isPending: false,
  };

  it("Should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialSearchRobots);
  });

  it("Should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialSearchRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      error: "",
      success: false,
      robots: [],
      isPending: true,
    });
  });

  if (
    ("Should handle REQUEST_ROBOTS_SUCCESS action",
    () => {
      expect(
        reducers.requestRobots(initialSearchRobots, {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: [
            {
              id: "123",
              name: "No Dunts",
              email: "daddy@congratulationspod.com",
            },
          ],
        })
      ).toEqual({
        robots: [
          {
            id: "123",
            name: "No Dunts",
            email: "daddy@congratulationspod.com",
          },
        ],
        isPending: false,
      });
    })
  );

  if (
    ("Should handle REQUEST_ROBOTS_FAILED action",
    () => {
      expect(
        reducers.requestRobots(initialSearchRobots, {
          type: REQUEST_ROBOTS_FAILED,
          payload: {
            robots: [],
            error: "error",
            isPending: false,
          },
        })
      ).toEqual({
        robots: [],
        error: "error",
        isPending: false,
      });
    })
  );
});
