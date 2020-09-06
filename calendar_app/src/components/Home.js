import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div>
            <div class="justify-content-center d-flex">
                <FontAwesomeIcon
                    className="calendar-icon"
                    icon="calendar-alt"
                />
            </div>
            <h1
                class="text-center"
                style={{ marginTop: "10vh", fontSize: "1.6vw" }}
            >
                A place to keep track of all of your todos, events, and due
                dates.
            </h1>
        </div>
    );
}
