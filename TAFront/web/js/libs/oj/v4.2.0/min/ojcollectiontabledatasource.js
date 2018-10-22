/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(a,g){a.Ce=function(c,b){this.data={};if(!(c instanceof a.t))throw Error(a.ta.De._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.ta.De._ERR_DATA_INVALID_TYPE_DETAIL);a.Ce.N.constructor.call(this,c,b);this.pe=c;this.HHa();this.Init();if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.fM=!0};o_("CollectionTableDataSource",a.Ce,a);a.f.ua(a.Ce,a.ta,"oj.CollectionTableDataSource");a.Ce.prototype.No=null;a.f.j("CollectionTableDataSource.prototype.comparator",
{No:a.Ce.prototype.No});a.Ce.prototype.Init=function(){a.Ce.N.Init.call(this)};a.Ce.prototype.at=function(c,b){b=b||{};b.deferred=!0;var d=this.pe.at(c,b),e=this;e.GK=!0;var f;return new Promise(function(b,g){null!=d?d.then(function(a){e.GK=!1;f={data:a.attributes,index:c,key:a.id};b(f)},function(b){e.GK=!1;a.ta.N.handleEvent.call(e,a.ta.ga.ERROR,b);g(b)}):b(null)})};a.f.j("CollectionTableDataSource.prototype.at",{at:a.Ce.prototype.at});a.Ce.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||
this.fM?this.si(a):Promise.resolve()};a.f.j("CollectionTableDataSource.prototype.fetch",{fetch:a.Ce.prototype.fetch});a.Ce.prototype.get=function(c,b){b=b||{};b.deferred=!0;var d=this.pe.get(c,b),e=this,f,g;return new Promise(function(b,c){null!=d?d.then(function(a){g=e.ik(a,a.attributes);f={data:g,index:a.index,key:a.id};b(f)},function(b){a.ta.N.handleEvent.call(e,a.ta.ga.ERROR,b);c(b)}):b(null)})};a.f.j("CollectionTableDataSource.prototype.get",{get:a.Ce.prototype.get});a.Ce.prototype.sort=function(a){null==
a?a=this.sortCriteria:this.sortCriteria=a;var b=this.comparator,d=this;return new Promise(function(e){null==b?(d.pe.comparator=a.key,d.pe.sortDirection="ascending"==a.direction?1:-1):d.pe.comparator=b;d.pe.sort(null);e({header:a.key,direction:a.direction})})};a.f.j("CollectionTableDataSource.prototype.sort",{sort:a.Ce.prototype.sort});a.Ce.prototype.totalSize=function(){var a=0<=this.pe.totalResults?this.pe.totalResults:-1;if(-1<a){var b=this.pe.size();return b>a?b:a}if(0<this.P2)a=this.P2;else if("atLeast"==
this.totalSizeConfidence())return this.pe.size();return a};a.f.j("CollectionTableDataSource.prototype.totalSize",{totalSize:a.Ce.prototype.totalSize});a.Ce.prototype.totalSizeConfidence=function(){return 0<=this.pe.totalResults?"actual":this.pe.hasMore?"atLeast":"unknown"};a.f.j("CollectionTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Ce.prototype.totalSizeConfidence});a.Ce.prototype.HHa=function(){var c=this;this.pe.on(a.za.ga.SYNC,function(b){if(b instanceof a.V)a.ta.N.handleEvent.call(c,
a.ta.ga.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]});else if(b instanceof a.t&&!c.GK&&!c.uu){var d=b.offset,e=b.lastFetchCount||b.lastFetchSize;if(0<e||c.pe.Qb()){c.oa=d;c.Nb=e;var f=0;if(0<c.pe.Wba||c.pe.Z$)f=d+e;c.GK=!0;b.OC(d,f).then(function(a){c.GK=!1;var b=[],e=[],f,g,t;for(f=0;f<a.length;f++)null!=a[f]&&(g=a[f],t=c.ik(g,g.attributes),b.push(t),e.push(g.id));c.Mp.call(c,{silent:!1},{data:b,keys:e,startIndex:d},null)})}else b=c.vE(),c.Mp.call(c,{silent:!1},b,null)}});this.pe.on(a.za.ga.ALLADDED,
function(b,d){var e=[],f=[],g=[],k,l,m;for(k=0;k<d.length;k++)l=d[k],m=c.ik(l,l.attributes),e.push(m),f.push(l.id),g.push(l.index);a.ta.N.handleEvent.call(c,a.ta.ga.ADD,{data:e,keys:f,indexes:g})});this.pe.on(a.za.ga.ALLREMOVED,function(b,d){var e=[],f=[],g=[],k,l;for(k=0;k<d.length;k++)l=d[k],e.push(l.attributes),f.push(l.id),g.push(l.index);a.ta.N.handleEvent.call(c,a.ta.ga.REMOVE,{data:e,keys:f,indexes:g})});this.pe.on(a.za.ga.RESET,function(b){a.ta.N.handleEvent.call(c,a.ta.ga.RESET,b)});this.pe.on(a.za.ga.SORT,
function(b,d){if(null==d||!d.add){var e={};null==b||null==!b.comparator||g.isFunction(b.comparator)||(e.header=b.comparator,e.direction=1===b.sortDirection?"ascending":"descending");a.ta.N.handleEvent.call(c,a.ta.ga.SORT,e)}});this.pe.on(a.za.ga.CHANGE,function(b){a.ta.N.handleEvent.call(c,a.ta.ga.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]})});this.pe.on(a.za.ga.DESTROY,function(b){a.ta.N.handleEvent.call(c,a.ta.ga.DESTROY,b)});this.pe.on(a.za.ga.REFRESH,function(b){a.ta.N.handleEvent.call(c,
a.ta.ga.REFRESH,b)});this.pe.on(a.za.ga.ERROR,function(b,d,e){a.ta.N.handleEvent.call(c,a.ta.ga.ERROR,b,d,e)});this.pe.on(a.za.ga.REQUEST,function(b){a.ta.N.handleEvent.call(c,a.ta.ga.REQUEST,b)})};a.Ce.prototype.si=function(a){this.eM(a);a=a||{};var b=this;this.Apa=0<a.pageSize?!0:!1;this.oa=null==a.startIndex?this.oa:a.startIndex;this.Nb=0<a.pageSize?a.pageSize:-1;a.pageSize=this.Nb;a.startIndex=this.oa;a.refresh=!0;return new Promise(function(d,e){var f=b.Nb;b.Apa||(f=25);b.pe.dH(b.oa,f).then(function(e){var f;
if(b.Apa||b.pe.Qb()){f=[];var g=[],m,n,t;for(m=0;m<e.models.length;m++)n=e.models[m],t=b.ik(n,n.attributes),f[m]=t,g[m]=n.id;f={data:f,keys:g,startIndex:b.oa};e.models.length<b.Nb?0>b.totalSize()&&(b.P2=b.oa+e.models.length):b.P2=null}else f=b.vE();b.Mp.call(b,a,f,null);d(f)},function(d){b.Mp.call(b,a,null,d);e(d)})})};a.Ce.prototype.eM=function(c){this.uu=!0;c.silent||a.ta.N.handleEvent.call(this,a.ta.ga.REQUEST,{startIndex:c.startIndex})};a.Ce.prototype.Mp=function(c,b,d){this.uu=!1;null!=d?a.ta.N.handleEvent.call(this,
a.ta.ga.ERROR,d):c.silent||a.ta.N.handleEvent.call(this,a.ta.ga.SYNC,b)};a.Ce.prototype.vE=function(){var a=this.pe.size()-1,b=[],d=[],e,f,g;for(e=0;e<=a;e++)g=this.pe.at(e),f=this.ik(g,g.attributes),b[e]=f,d[e]=g.id;return{data:b,keys:d,startIndex:this.oa}};a.Ce.prototype.getCapability=function(){return null};a.f.j("CollectionTableDataSource.prototype.getCapability",{getCapability:a.Ce.prototype.getCapability});a.Ce.prototype.ik=function(a,b){var d={},e;for(e in b)b.hasOwnProperty(e)&&function(){var b=
e;Object.defineProperty(d,e,{get:function(){return a.get(b)},set:function(d){a.set(b,d,{silent:!0})},enumerable:!0})}();return d}});