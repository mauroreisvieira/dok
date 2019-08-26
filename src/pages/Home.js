import { el, mount, router } from "redom";
import Header from "./../components/Header";
import Main from "./../components/Main";

export default class Home {
    constructor() {
        this.el = el(
            "div",
            {
                class: "w-full max-w-screen-xl relative mx-auto px-6 pt-16 pb-40 md:pb-24",
            },
            el(
                "div",
                {
                    class: "flex flex-col px-6 max-w-3xl mx-auto",
                },
                el("img", {
                    src: "./static/images/redomjs.svg",
                    alt: "Re:dom Logo",
                    class: "self-center w-48 my-12",
                }),
                el(
                    "h1",
                    { class: "text-3xl sm:text-4xl md:text-7xl xl:text-4xl font-light leading-tight" },
                    "Tiny (2 KB) turboboosted JavaScript library for creating user interfaces"
                ),
                el(
                    "div",
                    { class: "leading-relaxed text-gray-900" },
                    el(
                        "p",
                        { class: "my-6" },
                        "RE:DOM is a tiny (2 KB) DOM library, which adds useful helpers to create DOM elements and keeping them in sync with the data."
                    ),
                    el(
                        "p",
                        { class: "my-6" },
                        "Because RE:DOM is so close to the metal and doesn't use virtual dom, it's actually faster and uses less memory than almost all virtual dom based libraries, including React (benchmark)."
                    ),
                    el("p", { class: "my-6" }, "It's also easy to create reusable components with RE:DOM."),
                    el(
                        "p",
                        { class: "" },
                        "Another benefit is, that you can use just pure JavaScript, so no complicated templating languages to learn and hassle with. Plus RE:DOM plays nicely with others. No need to write wrappers for things like Google Maps."
                    )
                ),
                el(
                    "div",
                    { class: "mt-12" },
                    el(
                        "a",
                        {
                            href: "#installation",
                            class:
                                "sm:inline-flex flex justify-center mb-4 uppercase rounded-full px-8 py-3 sm:mr-4 border-2 border-primary text-base font-semibold text-primary",
                        },
                        "Get Started"
                    ),
                    el(
                        "a",
                        {
                            href: "https://github.com/redom/redom/",
                            target: "_blank",
                            class:
                                "sm:inline-flex flex justify-center uppercase rounded-full px-8 py-3 border-2 border-gray-200 bg-gray-200 text-base font-semibold text-gray-700",
                        },
                        "Github"
                    )
                )
            )
        );
    }
}
