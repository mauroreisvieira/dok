import { el, setChildren } from "redom";
import { Remarkable } from "remarkable";
import Prism from "prismjs";

import { docsRepo } from "../../../.redomdoc/config.js";
import "./../../styles/markdown.css";

export default class Markdown {
    constructor(path, content) {
        new Promise((resolve, reject) => {
            return fetch(window.location.origin + window.location.pathname + path)
                .then(response => {
                    return response.text();
                })
                .then(result => {
                    this.md = new Remarkable({
                        langPrefix: "hljs language-",
                    });

                    this.content = el(
                        "div",
                        {
                            class: "markdown-doc mt-16 pt-8 pb-16 w-full",
                        },
                        el(
                            "div",
                            { class: "max-w-screen-xl" },
                            (this.markdown = el("div")),
                            (this.footer = el(
                                "div",
                                { class: "border-t border-gray-400 py-6 mt-8 text-gray-600" },
                                "Caught a mistake or want to contribute to the documentation? ",
                                el(
                                    "a",
                                    {
                                        href: docsRepo + path,
                                        target: "_black",
                                    },
                                    "Edit this page on GitHub"
                                )
                            ))
                        )
                    );
                    this.markdown.innerHTML = this.md.render(result);
                    setChildren(content, this.content);
                })
                .then(response => {
                    Prism.highlightAll();
                    console.log(this.content.querySelectorAll("h2"));
                });
        });
    }
}
