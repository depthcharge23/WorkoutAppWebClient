import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header Component", () => {
    it("Renders the Header component sucessfully", () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.exists()).toBe(true);
    });

    it("Renders the text 'The Workout App'", () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find("h1").text();
        
        expect(text).toEqual("The Workout App");
    });
});