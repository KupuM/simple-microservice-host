import React, { lazy, Suspense } from "react";

const LomonosovPageModule = lazy(() => import("Catalog/LomonosovPage"));

export const LomonosovPage = () => (
    <Suspense fallback={<span>Загрузка...</span>}>
        <LomonosovPageModule />
    </Suspense>
);

LomonosovPage.displayName = "LomonosovPage";
