import React, { lazy, Suspense } from "react";

const LermontovPageModule = lazy(() => import("Catalog/LermontovPage"));

export const LermontovPage = () => (
    <Suspense fallback={<span>Загрузка...</span>}>
        <LermontovPageModule />
    </Suspense>
);

LermontovPage.displayName = "LermontovPage";
