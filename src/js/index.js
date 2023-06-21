(function ($) {
    "use strict";

    $(document).ready(function () {
        //codes for collapse card
        $(".collapse-toggler .trigger").on("click", function (e) {
            e.target.closest(".collapse-toggler").classList.toggle("open");
        });

        $(".subnav-toggler").on("click", function () {
            var element = $(".subnav");
            element.toggleClass('w-subnav-menu');
            element.toggleClass('w-4');
            element.find('>div').toggleClass('translate-x-0');
            element.find('>div').toggleClass('-translate-x-full');
        });

        $(".header-menu-dropdown-toggler").on("click", function () {
            $(".header-menu-dropdown").toggleClass('translate-y-0');
            $(".header-menu-dropdown").toggleClass('-translate-y-full');
            $(".header-menu-dropdown").toggleClass('opacity-100');
            $(".header-menu-dropdown").toggleClass('opacity-0');
            $(".header-menu-dropdown").toggleClass('hidden');
        });

        $(".market-tooltip-handler").on("mouseover", function () {
            $(".market-tooltip-box").removeClass('opacity-0');
        });

        $(".market-tooltip-handler").on("mouseleave", function () {
            $(".market-tooltip-box").addClass('opacity-0');
        });


        $(".market-setting-toggler").on("click", function () {
            $(".market-setting-box").toggleClass('translate-y-0');
            $(".market-setting-box").toggleClass('-translate-y-full');
            $(".market-setting-box").toggleClass('opacity-100');
            $(".market-setting-box").toggleClass('opacity-0');
            $(".market-setting-box").toggleClass('hidden');
        });

        $(".sidebar-toggler").on("click", function () {
            $(".sidebar").toggleClass('translate-x-0');
            $(".sidebar").toggleClass('-translate-x-full');
            $(".connect-dropdown").addClass('hidden');
            $(".connect-dropdown").removeClass('opacity-100');
            $(".connect-dropdown").addClass('opacity-0');
        });

        $(".connect-dropdown-toggler").on("click", function () {
            $(".sidebar").removeClass('translate-x-0');
            $(".sidebar").addClass('-translate-x-full');
            $(".connect-dropdown").toggleClass('hidden');
            $(".connect-dropdown").toggleClass('opacity-100');
            $(".connect-dropdown").toggleClass('opacity-0');
        });

        $(".connect-wallet-toggler").on("click", function () {
            $(".connect-wallet-modal").toggleClass('hidden');
            $(".connect-wallet-modal").toggleClass('opacity-100');
            $(".connect-wallet-modal").toggleClass('opacity-0');
        });

        $(".trade-sidebar-dropdown-toggler").on("click", function () {
            $(".trade-sidebar-dropdown").toggleClass('hidden');
            $(".trade-sidebar-dropdown").toggleClass('opacity-100');
            $(".trade-sidebar-dropdown").toggleClass('opacity-0');
            $(".trade-sidebar-dropdown").toggleClass('translate-y-0');
            $(".trade-sidebar-dropdown").toggleClass('-translate-y-full');
        });

        $(".trade-sidebar-dropdown").on("click", function () {
            $(".trade-sidebar-dropdown").toggleClass('hidden');
            $(".trade-sidebar-dropdown").toggleClass('opacity-100');
            $(".trade-sidebar-dropdown").toggleClass('opacity-0');
            $(".trade-sidebar-dropdown").toggleClass('translate-y-0');
            $(".trade-sidebar-dropdown").toggleClass('-translate-y-full');
        });

        $(".market-order-toggler").on("click", function () {
            $(".market-order-sidebar").toggleClass('hidden');
            $(".market-order-sidebar").toggleClass('-translate-x-full');
            $(".market-order-sidebar").toggleClass('opacity-0');
            $(".market-order-sidebar").toggleClass('opacity-100');
            $(".market-order-sidebar").toggleClass('w-market-orders');
            $(".market-order-sidebar").toggleClass('w-0');
        });
    });

})(jQuery);