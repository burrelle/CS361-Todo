import { mount } from "vue-test-utils";
import SignUp from "../src/components/SignUp.vue";
import expect from "expect";
import router from "../src/router";

describe("Sign In Component", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(SignUp, { router: router });
    });

    it("loads the sign up component", () => {
      expect(wrapper.is(".sign-up")).toEqual(true);
    });

    it("has a title of a better todo", () => {
      expect(wrapper.find(".title").text()).toBe("A Better Todo");
    });

    it("has a subtitle of create an account", () => {
      expect(wrapper.find(".subtitle").text()).toBe("Create an Account");
    });

    it("can add an email", () => {
      wrapper.setData({ email: "example@example.com" });
      expect(wrapper.find(".email-input").element.value).toBe("example@example.com");
    });

    it("can add a password", () => {
      wrapper.setData({ password: "password" });
      expect(wrapper.find(".password-input").element.value).toBe("password");
    });

    it("has a login button", () => {
      expect(wrapper.find(".btn-create").text()).toBe("Create Account");
    });

    it("has a create account button", () => {
      expect(wrapper.find(".btn-return").text()).toBe("Return to Login");
    });
})