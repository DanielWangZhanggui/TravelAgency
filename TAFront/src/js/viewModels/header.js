/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
define(['knockout','ojs/ojcore', 'utils','ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojoffcanvas', 'ojs/ojdatacollection-common', 'ojs/ojdialog'], function (ko, oj, utils) {
    /**
     * The view model for the header module
     */

    function logout(){
        var user = utils.eraseCookie('username');
    }

    function HeaderViewModel() {
        var self = this;

        //
        // Button used for toggling off screen data.
        //
        var offScreenDataButton = {
            "label": "offscreen-toggle",
            "iconClass": "oj-web-applayout-offcanvas-icon",
            "url": "#"
        };

        //
        // Dropdown menu states
        //

        self.menuItemSelect = function (event, ui) {
            switch (ui.item.attr("id")) {
                case "About":
                    $("#aboutDialog").ojDialog("open");
                    break;
                case "Sign Out":
                    logout();
                    var router = oj.Router.rootInstance;
                    window.location.reload();
                    router.go("login");
                    break;
                case "Sign In":
                    oj.Router.rootInstance.go("login");
                    break;
                default:
            }
        };

        // Data for application name
        var appName = {
            "id": "qs",
            "name": "Travel Agency Demo"
        };

        //
        // Toolbar buttons
        //
        username = utils.isLogged();
        var headerData;
        if(username =='?'){
            headerdata = {
                username: "Not Logged in",
                global_nav_dropdown_items: [{
                    "label": "Sign Up",
                    "url": "#"
                },
                {
                    "label": "Sign In",
                    "url": "#"
                }]            
            }
        }
        else{
            headerdata = {
                username: username,
                global_nav_dropdown_items: [
                {"label": "About",
                    "url": "#"
                },
                {"label": "Sign Out",
                    "url": "#"
                }]            
            }
        }

        var toolbarData = {
            // user name in toolbar
            "userName": headerdata.username,
            "toolbar_buttons": [
                {
                    "label": "toolbar_search_button",
                    "iconClass": "oj-fwk-icon-magnifier oj-fwk-icon",
                    "url": "#"
                }
            ],
            // Data for global nav dropdown menu embedded in toolbar.
            "global_nav_dropdown_items": headerdata.global_nav_dropdown_items
        };

        self.offScreenButtonIconClass = offScreenDataButton.iconClass;
        self.offScreenButtonLabel = offScreenDataButton.label;

        self.appId = appName.id;
        self.appName = appName.name;

        self.userName = ko.observable(toolbarData.userName);
        self.toolbarButtons = toolbarData.toolbar_buttons;
        self.globalNavItems = toolbarData.global_nav_dropdown_items;

        self.appDrawer =
                {
                    "edge": "start",
                    "displayMode": "push",
                    "selector": "#appDrawer",
                    "selection": "selectedItem",
                    "content": '#pageContent'
                };

        //
        // Data for application navigation
        //
        var router = oj.Router.rootInstance;
        var appNavData = [
            {
                name: router.states[0].label,
                id: router.states[0].id,
                disabled: 'false',
                // iconClass: 'demo-navi-dashboard-icon oj-navigationlist-item-icon'
                iconClass: 'oj-navigationlist-item-icon'
            },
            {
                name: router.states[1].label,
                id: router.states[1].id,
                disabled: 'false',
                iconClass: 'oj-navigationlist-item-icon'
                // iconClass: 'demo-navi-person-icon oj-navigationlist-item-icon'
            },
            {
                name: router.states[2].label,
                id: router.states[2].id,
                disabled: 'false',
                // iconClass: 'oj-disabled demo-navi-people-icon oj-navigationlist-item-icon'
                iconClass: 'oj-disabled oj-navigationlist-item-icon'
            }];

        self.dataSource = new oj.ArrayTableDataSource(appNavData, {idAttribute: 'id'});

        self.toggleAppDrawer = function ()
        {
            return oj.OffcanvasUtils.toggle(self.appDrawer);
        };

        //
        // Close off-screen content once window becomes larger.
        //
        var query = window.matchMedia("(min-width: 39.375rem)");
        var mqListener = function (event)
        {
            oj.OffcanvasUtils.close(self.appDrawer);
        };
        query.addListener(mqListener);

    }
    return HeaderViewModel;
});
