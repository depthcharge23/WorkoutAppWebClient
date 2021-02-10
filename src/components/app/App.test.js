import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
    it("renders 'Hello World!'", () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find("div").text();
        expect(text).toEqual("Hello World!");
    });
});