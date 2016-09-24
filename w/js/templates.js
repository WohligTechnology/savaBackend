firstapp.run(['$templateCache', function($templateCache) {$templateCache.put("views/aside.html","<div class=\"template nav\" ng-include=template.navigation></div>");
$templateCache.put("views/footer.html","");
$templateCache.put("views/header.html","<span flex=\"\"></span><div class=\"md-toolbar-item layout-row\" ng-controller=HeaderCtrl><md-button class=\"md-warn md-raised\" ng-click=logOut()>Log Out</md-button></div>");
$templateCache.put("views/login.html","<section><div class=login><md-card><div layout=column><md-card-title md-theme-watch=\"\"><md-card-title-text><span class=md-headline>LOGIN</span></md-card-title-text></md-card-title>{{successmsg}}<form ng-submit=submitLogin(user)><md-input-container class=\"md-block md-input-invalid\"><label>Email</label> <input ng-model=user.email type=email required=\"\"></md-input-container><md-input-container class=\"md-block md-input-invalid\"><label>Password</label> <input ng-model=user.password type=password required=\"\"></md-input-container><md-card-actions class=\"layout-align-center layout-row\"><md-button class=\"md-raised md-primary\" type=submit>LOGIN</md-button></md-card-actions></form><md-divider></md-divider></div></md-card></div></section>");
$templateCache.put("views/navigation.html","<div layout-fill=\"\" layout=column><md-toolbar><div class=md-toolbar-tools><span>Sava</span></div></md-toolbar><md-list><md-list-item class=\"{{menu.classis}} min-w\" ng-repeat=\"menu in navigation\" ng-href={{menu.link}}>{{menu.name}}</md-list-item></md-list></div>");
$templateCache.put("views/sidemenu.html","<md-list><md-subheader class=md-no-sticky>Sidemenu</md-subheader><md-list-item ng-repeat=\"side in json.sidemenu\" md-ink-ripple=\"\" ng-click=performAction(side,sidemenuVal)><div><p>{{ side.name }}</p></div></md-list-item></md-list>");
$templateCache.put("views/template.html","<div layout=row><md-sidenav class=md-sidenav-left md-component-id=left md-is-locked-open=\"$mdMedia(\'min-width: 333px\')\"><div class=\"template aside\" ng-include=template.aside></div></md-sidenav><div layout=column layout-fill=\"\"><md-toolbar><div class=\"template header md-toolbar-tools\" ng-include=template.header></div></md-toolbar><md-content flex=\"\" layout-padding=\"\"><div class=\"template content\" ng-include=template.content ng-if=!sidemenuThere></div><div layout=row ng-if=sidemenuThere><div flex=80 layout-margin=\"0 20px 0 0\" class=\"template content\" ng-include=template.content></div><div flex=20 class=\"template sidemenu\" ng-include=template.sidemenu></div></div><footer><div class=\"template footer\" ng-include=template.footer></div></footer></md-content></div></div>");
$templateCache.put("views/test.html","<div jsoneditor=\"\">{ \"name\" : \"Chintan\" }</div>");
$templateCache.put("views/content/api.html","<div ui-sortable=sortableOptions ng-model=apis><div class=\"api-section md-whiteframe-z1 mb20\" ng-repeat=\"api in apis|filter:searchForm\"><div layout-fill=\"\" layout=column><md-toolbar><div class=md-toolbar-tools><h2><span ng-bind=api.name>Title</span></h2><span flex=\"\"></span><md-button class=md-raised ng-if=api._id>Test</md-button><md-button aria-label=Expand class=md-icon-button ng-click=expandApi(api)><ng-md-icon icon=unfold_more size=20 style=fill:white;></ng-md-icon></md-button><md-button aria-label=Delete class=md-icon-button ng-click=deleteApi(api) ng-if=api._id><ng-md-icon icon=delete size=20 style=fill:white;></ng-md-icon></md-button><md-button aria-label=Delete class=md-icon-button ng-click=copyApi(api,$index) ng-if=api._id><ng-md-icon icon=content_copy size=20 style=fill:white;></ng-md-icon></md-button><md-button aria-label=Delete class=md-icon-button ng-click=savedataApi(api) ng-if=\"!api._id && userForm.$valid\"><ng-md-icon icon=savedata size=20 style=fill:white;></ng-md-icon></md-button></div></md-toolbar><md-content ng-if=api.expand flex=\"\" layout-padding=\"\"><form name=userForm><div layout-gt-sm=row><md-input-container class=md-block flex-gt-sm=\"\"><label>Name</label> <input name=name ng-model=api.name required=\"\"><div ng-messages=userForm.name.$error><div ng-message=required>Name is required.</div></div></md-input-container><md-input-container class=md-block flex-gt-sm=\"\"><label>Type</label><md-select ng-model=api.type><md-option value=get>GET</md-option><md-option value=post>POST</md-option><md-option value=put>PUT</md-option><md-option value=delete>DELETE</md-option></md-select></md-input-container></div><md-input-container class=md-block><label>URL - {{project.url+\"/\"}}{{api.url}}</label> <input name=url ng-model=api.url required=\"\"><div ng-messages=userForm.url.$error><div ng-message=required>Url is required.</div></div></md-input-container><div class=testing-playground layout-gt-sm=row><div flex-gt-sm=\"\" jsoneditor=\"\" model=request ng-if=api.Response></div><div flex-gt-sm=\"\" jsoneditor=\"\" model=response ng-if=api.Response></div></div><md-input-container class=md-block><label>Comment</label> <textarea columns=1 md-maxlength=150 ng-model=api.comment rows=5></textarea></md-input-container><md-button class=\"md-raised md-primary\" ng-click=savedataApi(api) ng-if=userForm.$valid>savedata</md-button></form></md-content></div></div></div>");
$templateCache.put("views/content/content.html","");
$templateCache.put("views/content/onlyView.html","<section class=\"md-whiteframe-z1 users\"><md-list ng-cloak=\"\"><md-subheader class=md-no-sticky>{{json.title}}</md-subheader><md-divider></md-divider></md-list><form name=plan class=padlr16><md-input-container class=md-block ng-repeat=\"field in json.fields\"><div ng-if=\"field.type==\'hidden\'\"><input ng-model=json.editData[field.model] type={{field.type}} id={{field.id}}></div><div ng-if=\"field.type==\'text\' || field.type==\'email\'\"><label>{{field.name}}</label> <input ng-model=json.editData[field.model] type={{field.type}} id={{field.id}} ng-if=\"field.tableRef!=\'user\'\"> <input ng-model=armyName type={{field.type}} ng-if=armyName id={{field.id}}></div><div ng-if=\"field.type==\'readonly\'\"><label>{{field.name}}</label> <input ng-model=json.editData[field.model] type={{field.type}} readonly=true id={{field.id}}></div><div ng-if=\"field.type==\'select\'\"><label>{{field.name}}</label><md-select ng-model=json.editData[field.model]><md-option ng-repeat=\"item in field.url\" value={{item._id}}>{{item.name}}</md-option></md-select></div><div ng-if=\"field.type==\'selectFromTable\'\"><label>{{field.name}}</label><md-select ng-model=json.editData[field.model]><md-option ng-repeat=\"item in field.url\" value={{item._id}}>{{item.name}}</md-option></md-select></div></md-input-container><div ng-if=\"field.type==\'image\'\"><label>Upload Image</label><upload-image ng-model=field.model></upload-image></div><md-list ng-cloak=\"\"><md-list-item class=md-2-line ng-repeat=\"field in json.fields\"><img ng-src={{json.editData[field.model]}} class=md-avatar alt={{json.editData[field.model]}} ng-if=\"field.type==\'image\'\"><div class=md-list-item-text ng-if=\"field.type==\'image\'\"><h3>{{field.name}}</h3></div></md-list-item></md-list><section layout=row layout-sm=column layout-align=\"center center\" layout-wrap=\"\"><md-button class=\"md-raised md-primary\" ui-sref={{json.action[0].stateName}} ng-if=json.action[0].stateName>Back</md-button></section></form></section>");
$templateCache.put("views/content/projects.html","<section><div class=\"api-section md-whiteframe-z1 mb20\" layout-fill=\"\" layout=column ng-repeat=\"project in projects|filter:searchForm.name|orderBy:\'name\'\"><md-toolbar><div class=md-toolbar-tools><h2><span>{{project.name}} <span ng-if=project.Api.length>({{project.Api.length}})</span></span></h2><span flex=\"\"></span><div class=md-list-item-inner><ng-md-icon icon=check_circle ng-if=\"project.status==3\" size=20></ng-md-icon><ng-md-icon icon=error ng-if=\"project.status==2\" size=20></ng-md-icon><ng-md-icon icon=warning ng-if=\"project.status==1\" size=20></ng-md-icon><md-button class=md-raised href=\"\" ng-if=project._id>TEST</md-button><md-button class=md-raised href=#/api/{{project._id}} ng-if=project._id>Open</md-button></div><md-button aria-label=Expand ng-click=expandProject(project) class=md-icon-button><ng-md-icon icon=unfold_more size=20 style=fill:white;></ng-md-icon></md-button><md-button aria-label=Delete class=md-icon-button ng-click=deleteProject(project); ng-if=project._id><ng-md-icon icon=delete size=20 style=fill:white;></ng-md-icon></md-button><md-button aria-label=savedata class=md-icon-button ng-click=savedataProject(project); ng-if=\"!project._id && projectForm.$valid\"><ng-md-icon icon=savedata size=20 style=fill:white;></ng-md-icon></md-button></div></md-toolbar><md-content flex=\"\" layout-padding=\"\" ng-if=project.expand><div class=single-project><form name=projectForm><div class=project-detail layout=row><md-input-container class=md-block flex-gt-md=\"\"><label>Project Name</label> <input name=name ng-model=project.name required=\"\" type=text><div ng-messages=projectForm.name.$error><div ng-message=required>Name is required.</div></div></md-input-container><div flex=5 hide-sm=\"\" hide-xs=\"\"></div><md-input-container class=md-block flex-gt-sm=\"\"><label>Project Alias - {{mockURL+project.alias}}</label> <input name=alias ng-model=project.alias required=\"\" type=text><div ng-messages=projectForm.alias.$error><div ng-message=required>Alias is required.</div></div></md-input-container></div><div layout=row><md-input-container class=md-block flex-gt-md=\"\"><label>URL</label> <input name=url ng-model=project.url required=\"\" type=url><div ng-messages=projectForm.url.$error><div ng-message=required>This is required and should be a valid url.</div></div></md-input-container></div></form><md-card-actions class=layout-row><md-button class=\"md-raised md-primary\" ng-click=savedataProject(project) ng-if=projectForm.$valid>savedata</md-button><md-button ng-click=copyMockUrl(project)>Copy Mock URL</md-button><md-button ng-click=copyLiveUrl(project)>Copy Live URL</md-button></md-card-actions></div></md-content></div></section>");
$templateCache.put("views/content/users.html","");
$templateCache.put("views/directive/listType.html","<div class=form-group><label>Link</label><div class=row><div class=col-md-9><div class=\"input-group blue-border\"><input type=text class=form-control id=linkText aria-describedby=inputGroupSuccess4Status disabled=\"\"> <span class=\"btn btn-primary btn-outline btn-small create-btn input-group-addon\" ng-click=open();>Change Link</span></div></div></div></div>");
$templateCache.put("views/directive/uploadFile.html","<div class=form-group><div class=img-box ng-if=\"image && !isMultiple\" ng-hide=noShow><img ng-src={{image.url}} imageonload=upload(image) type={{image.file.type}}></div><div class=clearfix ng-if=\"image && isMultiple\" ng-hide=noShow><div class=img-box style=float:left; ng-repeat=\"sImage in image\"><img ng-src={{sImage.url}} imageonload=upload(sImage) type={{sImage.file.type}}></div></div><div class=\"btn-upload btn btn-primary btn-outline btn-small create-btn\"><input id=inputImage ng-show=!isMultiple type=file accept=image/* image=image title=\"Choose Files\" class=btn-primary> <input id=inputImage ng-show=isMultiple type=file accept=image/* image=image title=\"Choose Multiple Files\" class=btn-primary onchange=angular.element(this).scope().clearOld() multiple=\"\"></div></div>");
$templateCache.put("views/type/create.html","<section class=\"md-whiteframe-z1 users\"><md-list ng-cloak=\"\"><md-subheader class=md-no-sticky>{{json.title}}</md-subheader><md-divider></md-divider></md-list><form name=plan class=padlr16><md-input-container class=md-block ng-repeat=\"field in json.fields\"><div ng-if=\"field.type==\'hidden\'\"><input ng-model=field.model type={{field.type}} name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'text\' || field.type==\'email\'\"><label>{{field.name}}</label> <input ng-model=field.model type={{field.type}} name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'readonly\'\"><label>{{field.name}}</label> <input ng-model=json.editData[field.model] type=text readonly=true name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'select\' && field.option==\'single\'\"><label>{{field.name}}</label><md-select ng-model=field.model><md-option ng-repeat=\"item in field.url\" value={{item.value}}>{{item.name}}</md-option></md-select></div><div ng-if=\"field.type==\'select\' && field.option==\'multiple\' && field.option\"><label>{{field.name}}</label><md-select ng-model=field.model multiple=\"\"><md-option ng-repeat=\"item in field.url\" value={{item.value}} ng-if=item>{{item.name}}</md-option></md-select></div><div ng-if=\"field.type==\'selectFromTable\'\"><label for={{field.id}}>{{field.name}}</label><br><div ng-if=\"field.option==\'multiple\'\"><md-select ng-model=field.model multiple=\"\"><md-optgroup><md-option value={{item._id}} ng-repeat=\"item in field.dropdownvalues track by $index\">{{item.name}}</md-option></md-optgroup></md-select></div><div ng-if=\"field.option==\'single\'\"><md-select ng-model=field.model><md-optgroup><md-option value={{item._id}} ng-repeat=\"item in field.dropdownvalues track by $index\">{{item.name}}</md-option></md-optgroup></md-select></div><br></div><div ng-if=\"field.type==\'textarea\'\"><label>{{field.name}}</label> <textarea style=height:100px; ng-model=field.model name={{field.name}} id={{field.id}}></textarea></div><div ng-if=\"field.type==\'tinymce\'\"><label>{{field.name}}</label> <textarea ui-tinymce=\"\" ng-model=field.model></textarea></div><div ng-if=\"field.type==\'tinymceImage\'\"><label>{{field.name}}</label> <textarea ui-tinymce=tinymceOptions ng-model=field.model></textarea></div><div ng-if=\"field.type==\'date\'\"><label>Date</label><input ng-model=field.model type=date name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'image\'\"><label>{{field.name}}</label><span style=\"float: right;\">{{field.size}}</span><div ng-if=\"field.option==\'multiple\'\"><upload-image ng-model=field.model no-view=\"\" multiple=\"\" inobj=\"\"></upload-image><div ng-repeat=\"img in field.model\" ng-if=field.model><img style=width:150px; ng-src=\"{{img.image | uploadpath:250:250:\'fill\'}}\" ng-if=img.image></div></div><div ng-if=\"field.option==\'single\'\"><upload-image ng-model=field.model no-view=\"\"></upload-image><div class=img-holder><img style=width:150px; ng-src=\"{{field.model | uploadpath:250:250:\'fill\'}}\" ng-if=field.model></div></div></div><div ng-if=\"field.type==\'chips\'\" ng-init=\"field.model=[]\"><label>{{field.name}}</label><md-chips ng-model=field.model placeholder=\"Enter a tag\"></md-chips><br></div></md-input-container><section layout=row layout-sm=column layout-align=\"center center\" layout-wrap=\"\"><md-button class=\"md-raised md-primary\" ng-click=makeReadyForApi() ng-class=\"{\'disabled\' : !plan.$valid }\">save</md-button><md-button class=\"md-raised md-warn\" ng-click=back()>Cancel</md-button></section></form></section>");
$templateCache.put("views/type/edit.html","<section class=\"md-whiteframe-z1 users\"><md-list ng-cloak=\"\"><md-subheader class=md-no-sticky>{{json.title}}</md-subheader><md-divider></md-divider></md-list><form name=plan class=padlr16><md-input-container class=md-block ng-repeat=\"field in json.fields\"><div ng-if=\"field.type==\'hidden\'\"><input ng-model=json.editData[field.model] type={{field.type}} name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'text\' || field.type==\'email\'\"><label>{{field.name}}</label> <input ng-model=json.editData[field.model] type={{field.type}} name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'readonly\'\"><label>{{field.name}}</label> <input ng-model=json.editData[field.model] type=text readonly=true name={{field.name}} id={{field.id}}></div><div ng-if=\"field.type==\'select\' && field.option==\'single\'\"><label>{{field.name}}</label><md-select ng-model=json.editData[field.model]><md-option ng-repeat=\"item in field.url\" value={{item.value}} ng-if=item>{{item.name}}</md-option></md-select></div><div ng-if=\"field.type==\'select\' && field.option==\'multiple\'\"><label>{{field.name}}</label><md-select ng-model=json.editData[field.model] multiple=\"\"><md-option ng-repeat=\"item in field.url\" value={{item.value}} ng-if=item>{{item.name}}</md-option></md-select></div><div ng-if=\"field.type==\'textarea\'\"><label>{{field.name}}</label> <textarea style=height:100px; ng-model=json.editData[field.model] name={{field.name}} id={{field.id}}></textarea></div><div ng-if=\"field.type==\'tinymce\'\"><label>{{field.name}}</label> <textarea ui-tinymce=\"\" ng-model=json.editData[field.model]></textarea></div><div ng-if=\"field.type==\'tinymceImage\'\"><label>{{field.name}}</label> <textarea ui-tinymce=tinymceOptions ng-model=json.editData[field.model]></textarea></div><div ng-if=\"field.type==\'selectFromTable\'\"><label for={{field.id}}>{{field.name}}</label><br><div ng-if=\"field.option==\'multiple\'\"><md-select style=\"margin: 0 !important;\" ng-model=json.editData[field.model] multiple=\"\"><md-optgroup><md-option ng-repeat=\"item in field.dropdownvalues track by $index\" value={{item._id}} ng-selected=\"{{ item.name.Selected == true }}\">{{item.name}}</md-option></md-optgroup></md-select></div><div ng-if=\"field.option==\'single\'\"><md-select style=\"margin: 0 !important;\" ng-model=json.editData[field.model]><md-optgroup><md-option ng-repeat=\"item in field.dropdownvalues track by $index\" value={{item._id}} ng-selected=\"{{ item.name.Selected == true }}\">{{item.name}}</md-option></md-optgroup></md-select></div><br></div><div ng-if=\"field.type==\'date\'\"><label>{{field.name}}</label><input type=date ng-model=json.editData[field.model]></div><div ng-if=\"field.type==\'image\'\"><label></label>{{field.name}} <span style=\"float: right;\">{{field.size}}</span><div ng-if=\"field.option==\'multiple\'\"><upload-image ng-model=json.editData[field.model] no-view=\"\" multiple=\"\" inobj=\"\"></upload-image><div ng-repeat=\"img in json.editData[field.model]\" ng-if=json.editData[field.model]><img style=width:150px; ng-src=\"{{img.image | uploadpath:250:250:\'fill\'}}\" ng-if=img.image></div></div><div ng-if=\"field.option==\'single\'\"><span class=img-holder-big><img style=width:150px; ng-src=\"{{json.editData[field.model] | uploadpath:250:250:\'fill\'}}\"></span><upload-image ng-model=json.editData[field.model] no-view=\"\"></upload-image></div></div><div ng-if=\"field.type==\'chips\'\"><label>{{field.name}}</label><md-chips ng-model=json.editData[field.model] ng-if=json.editData[field.model]></md-chips><br></div></md-input-container><section layout=row layout-sm=column layout-align=\"center center\" layout-wrap=\"\"><md-button class=\"md-raised md-primary\" ng-click=makeReadyForApi() ng-class=\"{\'disabled\' : !plan.$valid }\">save</md-button><md-button class=\"md-raised md-warn\" ng-click=back()>Cancel</md-button></section></form></section>");
$templateCache.put("views/type/view.html","<section class=\"md-whiteframe-z1 users pb50\"><md-list ng-cloak=\"\"><div class=clearfix><md-subheader class=\"md-no-sticky all-user\" style=\"display: inline-block; vertical-align: top; width: 60%;\">{{json.title}}</md-subheader><div class=\"flex search-bar\" flex=33 style=\"display:inline-block; vertical-align:top; width: 37%; text-align:right;\"><md-autocomplete md-search-text=pagination.search md-items=\"result in json.tableData track by $index\" md-min-length=0 md-search-text-change=getMoreResults(); placeholder=Search class=layout-lg style=display:inline-block;></md-autocomplete><a class=add-position ui-sref={{json.createButtonState}} ng-hide=\"json.title==\'All Newsletters\' || json.title==\'All Contacts\' || json.title==\'All Notification\'\"><md-button class=\"md-fab md-primary md-mini\" aria-label=\"Add Users\"><md-icon class=\"fa fa-plus plus-icon\"></md-icon></md-button></a></div></div><md-divider></md-divider><md-list-item class=\"ls-head secondary-button-padding padlr16\"><p ng-repeat=\"field in json.fields\" class=word-b>{{field.name}}</p><md-button aria-label=Expand class=md-icon-button ng-repeat=\"action in json.action\"><ng-md-icon icon={{action.icon}} size=20 style=fill:black;></ng-md-icon></md-button></md-list-item><div ng-hide=\"json.tableData.length>=0\" class=loadingbox>Loading...</div><div ng-model=json.tableData ui-sortable=sortableOptions ng-if=json.sortable><md-list-item ng-show=\"json.tableData.length>=0\" ng-repeat=\"result in json.tableData\" class=\"secondary-button-padding padlr16\"><p ng-repeat=\"field in json.fields\" class=word-b><span ng-if=\"field.type!=\'image\' && result|getValue:field.tableRef:field.type!=\'\'\">{{result|getValue:field.tableRef:field.type}}</span> <span ng-if=\"field.type!=\'image\' && result|getValue:field.tableRef:field.type ==\'\'\"></span> <span class=img-holder ng-if=\"field.type==\'image\'\"><img ng-src={{result|getValue:field.tableRef:field.type}}></span></p><md-button aria-label=Expand class=md-icon-button ng-repeat=\"action in json.action\" ng-click=performAction(action,result)><ng-md-icon icon={{action.icon}} size=20 style=fill:{{action.color}};></ng-md-icon></md-button></md-list-item></div><div no-sortable=\"\" ng-if=!json.sortable><md-list-item ng-show=\"json.tableData.length>=0\" ng-repeat=\"result in json.tableData\" class=\"secondary-button-padding padlr16\"><p ng-repeat=\"field in json.fields\" class=word-b><span ng-if=\"field.type!=\'image\' && result|getValue:field.tableRef:field.type!=\'\'\">{{result|getValue:field.tableRef:field.type}}</span> <span ng-if=\"field.type!=\'image\' && result|getValue:field.tableRef:field.type ==\'\'\"></span> <span class=img-holder ng-if=\"field.type==\'image\'\"><img ng-src={{result|getValue:field.tableRef:field.type}}></span></p><md-button aria-label=Expand class=md-icon-button ng-repeat=\"action in json.action\" ng-click=performAction(action,result)><ng-md-icon icon={{action.icon}} size=20 style=fill:{{action.color}};></ng-md-icon></md-button></md-list-item></div><div ng-if=pageInfo.totalitems></div><uib-pagination ng-show=\"json.tableData.length>0\" ng-change=getMoreResults(true) total-items=pageInfo.totalitems ng-model=pagination.pagenumber items-per-page=pagination.pagesize></uib-pagination></md-list><a class=add-position ui-sref={{json.createButtonState}} ng-hide=\"json.title==\'All Newsletters\' || json.title==\'All Contacts\' || json.title==\'All Notification\'\"><md-button class=\"md-fab md-fab-bottom-right md-primary\" aria-label=\"Add Users\"><md-icon class=\"fa fa-plus plus-icon\"></md-icon></md-button></a></section>");}]);