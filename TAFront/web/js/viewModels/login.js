define(['knockout', 'ojs/ojcore', 'utils', 'jquery','urls','ojs/ojknockout', 'ojs/ojmasonrylayout', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojknockout-validation', 'ojs/ojmodel','ojs/ojdialog'],
        function (ko, oj, utils, $)
        {
            function Login(username, password)
            {
                $.ajax({
                    type: "POST",
                    data: "JSON",
                    url: urls.user,
                    headers: {  
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' },
                    data: {
                        "username": username,
                        "password": password
                    },
                    success: function(data){
                        var router = oj.Router.rootInstance;
                        utils.createCookie('username', username, 90);
                        window.location.reload();
                        router.go("dashboard");
                    },
                    statusCode: {
                        403: function(){
                            $("#errorDialog").ojDialog("open");
                        }
                    }
                })
            };

            function LoginViewModel() {
                var username = utils.isLogged();
                if(username != "?")
                {
                    var router = oj.Router.rootInstance;
                    router.go("dashboard");
                }

                var self = this;
                self.tracker = ko.observable();
                self.password = ko.observable("");
                self.clickedButton = ko.observable();
                self.username = ko.observable("");
                self.buttonClick = function(data, event)
                {
                    var trackerObj = ko.utils.unwrapObservable(self.tracker);
                    if (!this._showComponentValidationErrors(trackerObj))
                    {
                        return;
                    }

                };
                self.routePage = function(data,event)
                {
                    self.clickedButton(event.currentTarget.id);
                    Login(self.username(), self.password());
                };
                self.onClick = function(data,event)
                {
                    self.buttonClick(data,event);
                    self.routePage(data,event);
                }
                self.shouldDisableCreate = function()
                {
                var trackerObj = ko.utils.unwrapObservable(self.tracker),
                hasInvalidComponents = trackerObj ? trackerObj["invalidShown"] : false;
                return  hasInvalidComponents;
                };
                self._showComponentValidationErrors = function (trackerObj)
                {
                    trackerObj.showMessages();
                    if (trackerObj.focusOnFirstInvalid())
                    return false;
                };
            }
            // ko.applyBindings(LoginViewModel);
            return LoginViewModel;

        });
