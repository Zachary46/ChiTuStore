define(["require", "exports", 'Application'], function (require, exports, app) {
    requirejs(['css!sc/Error/ConnectFail']);
    return function (page) {
        //c.scrollLoad(page);
        console.log('scrollload');
        page.load.add(function (sender, args) {
            page['return_url'] = args.hash;
        });
        page['redirec'] = function () {
            var url = (page['return_url'] || '#Home_Index').substr(1);
            app.showPage(url, {});
        };
        page.viewChanged.add(function () { return ko.applyBindings(page, page.nodes().content); });
        var topbar = page['topbar'];
        if (topbar) {
            $(topbar.element).find('.leftButton').hide();
        }
    };
});
