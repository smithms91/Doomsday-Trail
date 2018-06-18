"use strict";

const secondComponent = {
    template: `
        <p>Testing</p>
    `,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

    }]
}

angular.module("app").component("secondComponent", secondComponent);