---
title: 说说
subtitle: 自言自语做白日梦
date: 2022-10-31 15:50:28
comment: true
---

<style>
    #board {
        background-color: transparent !important;
        box-shadow: none !important;
        padding: 0;
    }
    @media (max-width: 575px) {
        #board {
            padding: 3rem 0;
        }
    }

    #comments {
        margin-top: 0 !important;
        margin-left: 15px;
        margin-right: 15px;
    }
    .col-12 {
        padding: 0 !important;
    }
    .col-md-10 {
        padding: 0 !important;
    }
    .tk-submit:nth-of-type(1) {
        display: none;
        margin-bottom: 2.5rem;
        margin-top: 0;
        background-color: var(--board-bg-color);
        padding: 1.2em;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.06),0 1px 5px 0 rgba(0,0,0,.12);
        border-radius: 0.5em;
    }
    .tk-comment {
        margin-bottom: 2.5rem;
        margin-top: 0;
        background-color: var(--board-bg-color);
        padding: 1.2em;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.06),0 1px 5px 0 rgba(0,0,0,.12);
        border-radius: 0.5em;
    }
    .tk-replies > .tk-comment {
        margin-bottom: 0;
        padding: 0.5em 0;
        box-shadow: none;
        border-radius: 0;
    }
    .tk-comments-title {
        display: none;
    }
    .tk-footer {
        display: none;
    }
    .tk-expand {
        background-color: var(--board-bg-color);
        border-radius: 0.5em;
        width: 25%;
        margin: 0 auto;
    }
</style>