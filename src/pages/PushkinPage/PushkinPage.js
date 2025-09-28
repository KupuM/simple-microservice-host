import React, { lazy, Suspense } from "react";

const PushkinPageModule = lazy(() => import("Catalog/PushkinPage"));

export const PushkinPage = () => (
    <Suspense fallback={<span>Загрузка...</span>}>
        <PushkinPageModule />
    </Suspense>
);

PushkinPage.displayName = "PushkinPage";
