import React from "react";

export const MainPage = ({ title, content, subtitle }) => {
    return (
        <article>
            <section>
                <h1>Демонстрация микросервисного приложения</h1>
                <p>
                    Сайт реализован на микросервисной архитектуре Module Federation и состоит из 2 независимых модулей
                    на React, каждый из которых размещен в отдельном репозитории.
                </p>
                <p>
                    Модуль host реализует контейнер для встраивания блоков сайта, таких как панель навигации и блок для
                    вставки содержимого страниц. Навигационная панель входит в состав модуля host, а содержимое страниц
                    (стихи) поставляется другим независимым модулем Catalog.
                </p>
                <p>
                    Такое разбиение на модули - это только лишь пример, в действительности количество и состав модулей
                    может быть любым и зависит от архитектуры приложения.
                </p>
                <p>Ссылки на репозитории:</p>
                <p>Модуль host: https://github.com/KupuM/simple-microservice-host</p>
                <p>Модуль catalog: https://github.com/KupuM/simple-microservice-catalog</p>
            </section>
        </article>
    );
};

MainPage.displayName = "MainPage";
