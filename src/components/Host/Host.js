import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "@components/Navbar/Navbar";
import { MainPage } from "@pages/MainPage/MainPage";
import { PushkinPage } from "@pages/PushkinPage/PushkinPage";
import { LermontovPage } from "@pages/LermontovPage/LermontovPage";
import { LomonosovPage } from "@pages/LomonosovPage/LomonosovPage";
import * as styles from "../../styles/styles.css";

const items = [
    { title: "Главная", link: "/" },
    { title: "Пушкин", link: "/pushkin" },
    { title: "Лермонтов", link: "/lermontov" },
    { title: "Ломоносов", link: "/lomonosov" },
];

export const Host = () => {
    return (
        <div className="container">
            <Router>
                <nav className="column navbar-left">
                    <Navbar items={items} />
                </nav>
                <main className="column content">
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/pushkin">
                            <PushkinPage />
                        </Route>
                        <Route path="/lermontov">
                            <LermontovPage />
                        </Route>
                        <Route path="/lomonosov">
                            <LomonosovPage />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
};

Host.displayName = "Host";
