(function(scope) {var profile = new Layer({"name":"profile","backgroundColor":"rgba(255,255,255,1)","width":375,"height":667,"constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var header = new Layer({"parent":profile,"name":"header","backgroundColor":null,"width":375,"height":125,"constraintValues":{"height":125,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.0937031484257871},"blending":"normal","clip":true,"borderStyle":"solid"});var coverImg = new Layer({"parent":header,"name":"coverImg","backgroundColor":null,"width":375,"height":125,"constraintValues":{"height":125,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var headerMeta = new Layer({"parent":header,"name":"headerMeta","backgroundColor":null,"width":130,"x":121,"height":41,"constraintValues":{"left":null,"height":41,"centerAnchorX":0.496,"width":130,"bottom":-68,"top":null,"centerAnchorY":1.38},"blending":"normal","clip":false,"borderStyle":"solid","y":152});var __layer_0__ = new TextLayer({"parent":headerMeta,"name":"cardosoandre","shadows":[{"x":0,"type":"text","y":1,"blur":1,"color":"rgba(0,0,0,0.25)"}],"backgroundColor":null,"width":65,"x":33,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"11px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"},"startIndex":0,"endIndex":12}],"text":"1,854 Tweets"}],"alignment":"left"},"height":13,"constraintValues":{"left":null,"height":13,"centerAnchorX":0.5038461538461538,"width":65,"bottom":8,"top":null,"centerAnchorY":0.6463414634146342},"blending":"normal","autoSize":true,"y":20});var __layer_1__ = new TextLayer({"parent":headerMeta,"name":"Andre Cardoso","shadows":[{"x":0,"type":"text","y":1,"blur":1,"color":"rgba(0,0,0,0.25)"}],"backgroundColor":null,"width":103,"x":15,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Heavy\", \"SFProDisplay-Heavy\", \"SFUIDisplay-Heavy\", \".SFUIDisplay-Heavy\", sans-serif"},"startIndex":0,"endIndex":13}],"text":"Andre Cardoso"}],"alignment":"left"},"height":16,"constraintValues":{"left":null,"height":16,"centerAnchorX":0.5115384615384615,"width":103,"top":5,"centerAnchorY":0.3170731707317073},"blending":"normal","autoSize":true,"y":5});var headerActions = new Layer({"parent":profile,"name":"headerActions","backgroundColor":null,"width":375,"height":42,"constraintValues":{"height":42,"centerAnchorX":0.5,"width":375,"right":0,"top":21,"centerAnchorY":0.06296851574212893},"blending":"normal","clip":false,"borderStyle":"solid","y":21});var __layer_2__ = new Layer({"parent":headerActions,"name":"backIcon","backgroundColor":null,"width":32,"x":12,"height":32,"constraintValues":{"left":12,"height":32,"centerAnchorX":0.07466666666666667,"width":32,"bottom":5,"top":5,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":5});var __layer_3__ = new SVGLayer({"parent":__layer_2__,"name":".SVGLayer","backgroundColor":"rgb(0, 0, 0)","width":31.95733333333333,"strokeWidth":0.5,"htmlIntrinsicSize":{"height":31.95733333333333,"width":31.95733333333333},"rotation":null,"height":31.95733333333333,"fill":"rgb(0, 0, 0)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"31.957\" height=\"31.957\"><path d=\"M 15.979 31.957 C 24.803 31.957 31.957 24.803 31.957 15.979 C 31.957 7.154 24.803 0 15.979 0 C 7.154 0 0 7.154 0 15.979 C 0 24.803 7.154 31.957 15.979 31.957 Z\" opacity=\"0.300000011920929\" name=\"Oval 6\"><\/path><\/svg>"});var __layer_4__ = new SVGLayer({"parent":__layer_2__,"name":".SVGLayer","backgroundColor":null,"width":5.492666666666667,"stroke":"rgba(255,255,255,1)","strokeWidth":1.997333333333333,"x":12.48333333333333,"htmlIntrinsicSize":{"height":11.3715307222742,"width":5.492666666666667},"rotation":null,"height":11.3715307222742,"opacity":null,"y":9.986666666666666,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"5.493\" height=\"11.372\"><path d=\"M 5.493 0 L 0 5.681 L 5.472 11.372\" fill=\"transparent\" stroke-width=\"1.997333333333333\" stroke-miterlimit=\"10\" name=\"Icon: Arrow left\"><\/path><\/svg>"});var __layer_5__ = new SVGLayer({"parent":headerActions,"name":".SVGLayer","backgroundColor":"rgb(0, 0, 0)","width":31.95733333333334,"strokeWidth":0.5,"x":330,"htmlIntrinsicSize":{"height":31.95733333333333,"width":31.95733333333334},"rotation":null,"height":31.95733333333333,"fill":"rgb(0, 0, 0)","opacity":null,"y":5,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"31.957\" height=\"31.957\"><path d=\"M 15.979 31.957 C 24.803 31.957 31.957 24.803 31.957 15.979 C 31.957 7.154 24.803 0 15.979 0 C 7.154 0 0 7.154 0 15.979 C 0 24.803 7.154 31.957 15.979 31.957 Z\" opacity=\"0.300000011920929\" name=\"Oval 6\"><\/path><\/svg>"});var __layer_6__ = new SVGLayer({"parent":headerActions,"name":".SVGLayer","backgroundColor":"rgb(255, 255, 255)","width":7.98933333333332,"strokeWidth":1,"x":336.5506666666666,"htmlIntrinsicSize":{"height":7.739666666666672,"width":7.98933333333332},"rotation":null,"height":7.739666666666672,"fill":"rgb(255, 255, 255)","opacity":null,"y":12.20300000000001,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"7.989\" height=\"7.74\"><path d=\"M 4.494 3.246 L 7.49 3.246 C 7.766 3.246 7.989 3.469 7.989 3.745 C 7.989 4.021 7.766 4.244 7.49 4.244 L 4.494 4.244 L 4.494 7.24 C 4.494 7.516 4.27 7.74 3.995 7.74 C 3.719 7.74 3.495 7.516 3.495 7.24 L 3.495 4.244 L 0.499 4.244 C 0.224 4.244 0 4.021 0 3.745 C 0 3.469 0.224 3.246 0.499 3.246 L 3.495 3.246 L 3.495 0.499 C 3.495 0.224 3.719 0 3.995 0 C 4.27 0 4.494 0.224 4.494 0.499 Z\" name=\"Path\"><\/path><\/svg>"});var __layer_7__ = new SVGLayer({"parent":headerActions,"name":".SVGLayer","backgroundColor":"rgb(255, 255, 255)","width":15.78336004897062,"strokeWidth":1,"x":340.5452056893162,"htmlIntrinsicSize":{"height":18.86386853733531,"width":15.78336004897062},"rotation":null,"height":18.86386853733531,"fill":"rgb(255, 255, 255)","opacity":null,"y":11.44522961142144,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"15.783\" height=\"18.864\"><path d=\"M 8.674 3.454 C 11.166 0.954 14.15 0.544 15.479 0.009 C 15.85 -0.141 15.918 1.655 15.479 2.996 C 15.041 4.337 13.537 5.096 12.994 5.597 C 11.665 6.669 10.502 6.132 9.339 7.74 C 9.837 7.919 10.335 7.919 11.997 7.204 C 11.831 7.74 11.665 8.276 10.502 9.169 C 9.339 10.061 8.162 9.801 6.348 10.776 C 4.022 12.026 1.53 16.669 1.031 17.74 C 0.33 19.247 -0.132 19.169 0.034 17.919 C 0.2 16.669 0.698 15.419 2.194 12.561 C 3.69 9.704 5.748 6.389 8.674 3.454 Z\" name=\"Path\"><\/path><\/svg>"});var tab = new Layer({"parent":profile,"name":"tab","borderWidth":{"left":0,"bottom":1,"right":0,"top":0},"backgroundColor":"rgba(255,255,255,1)","width":375,"borderColor":"rgba(187,198,206,1)","height":44,"constraintValues":{"height":44,"centerAnchorX":0.5,"width":375,"bottom":291,"right":0,"top":null,"centerAnchorY":0.5307346326836582},"blending":"normal","clip":false,"borderStyle":"solid","y":332});var __layer_8__ = new SVGLayer({"parent":tab,"name":".SVGLayer","backgroundColor":"rgba(30,161,241,1)","width":87.88266666666667,"strokeWidth":0.5,"x":0.4993333333333334,"htmlIntrinsicSize":{"height":1.99733333333333,"width":87.88266666666667},"rotation":null,"height":1.99733333333333,"fill":"rgba(30,161,241,1)","opacity":null,"y":41.462,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"87.883\" height=\"1.997\"><path d=\"M 0 0 L 87.883 0 L 87.883 1.997 L 0 1.997 Z\" name=\"Active\"><\/path><\/svg>"});var __layer_9__ = new TextLayer({"parent":tab,"name":"Likes","backgroundColor":null,"width":37,"x":320,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(100, 119, 133)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue-Bold\", \"Helvetica Neue\", sans-serif","fontWeight":700},"startIndex":0,"endIndex":5}],"text":"Likes"}],"alignment":"center"},"height":16,"constraintValues":{"left":null,"height":16,"centerAnchorX":0.9026666666666666,"width":37,"right":18,"top":12,"centerAnchorY":0.4545454545454545},"blending":"normal","autoSize":true,"y":12});var __layer_10__ = new TextLayer({"parent":tab,"name":"Media","backgroundColor":null,"width":42,"x":245,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(100, 119, 133)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue-Bold\", \"Helvetica Neue\", sans-serif","fontWeight":700},"startIndex":0,"endIndex":5}],"text":"Media"}],"alignment":"center"},"height":16,"constraintValues":{"left":null,"height":16,"centerAnchorX":0.7093333333333334,"width":42,"right":88,"top":12,"centerAnchorY":0.4545454545454545},"blending":"normal","autoSize":true,"y":12});var __layer_11__ = new TextLayer({"parent":tab,"name":"Tweets & replies","backgroundColor":null,"width":110,"x":102,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(100, 119, 133)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue-Bold\", \"Helvetica Neue\", sans-serif","fontWeight":700},"startIndex":0,"endIndex":16}],"text":"Tweets & replies"}],"alignment":"left"},"height":16,"constraintValues":{"left":102,"height":16,"centerAnchorX":0.4186666666666667,"width":110,"top":12,"centerAnchorY":0.4545454545454545},"blending":"normal","autoSize":true,"y":12});var __layer_12__ = new TextLayer({"parent":tab,"name":"Tweets","backgroundColor":null,"width":48,"x":20,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(30, 161, 241)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue-Bold\", \"Helvetica Neue\", sans-serif","fontWeight":700},"startIndex":0,"endIndex":6}],"text":"Tweets"}],"alignment":"center"},"height":16,"constraintValues":{"left":20,"height":16,"centerAnchorX":0.1173333333333333,"width":48,"top":12,"centerAnchorY":0.4545454545454545},"blending":"normal","autoSize":true,"y":12});var info = new Layer({"parent":profile,"name":"info","backgroundColor":null,"width":375,"height":209,"constraintValues":{"height":209,"centerAnchorX":0.5,"width":375,"right":0,"top":124,"centerAnchorY":0.3425787106446777},"blending":"normal","clip":false,"borderStyle":"solid","y":124});var __layer_13__ = new Layer({"parent":info,"name":"Following & Followers","backgroundColor":null,"width":243,"x":9,"height":17,"constraintValues":{"left":9,"height":17,"centerAnchorX":0.348,"width":243,"bottom":24,"top":null,"centerAnchorY":0.8444976076555024},"blending":"normal","clip":false,"borderStyle":"solid","y":168});var __layer_14__ = new TextLayer({"parent":__layer_13__,"name":"758 Following","backgroundColor":null,"width":88,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(20, 23, 26)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif"}},{"startIndex":3,"endIndex":4,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(20, 23, 26)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Medium\", \"SFProDisplay-Medium\", \"SFUIDisplay-Medium\", \".SFUIDisplay-Medium\", sans-serif"}},{"startIndex":4,"endIndex":13,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"}}],"text":"758 Following"}],"alignment":"left"},"height":16,"constraintValues":{"height":16,"width":88},"blending":"normal","autoSize":true});var __layer_15__ = new TextLayer({"parent":__layer_13__,"name":"1,968 Followers","backgroundColor":null,"width":100,"x":142,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(20, 23, 26)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif"}},{"startIndex":5,"endIndex":6,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Medium\", \"SFProDisplay-Medium\", \"SFUIDisplay-Medium\", \".SFUIDisplay-Medium\", sans-serif"}},{"startIndex":6,"endIndex":15,"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"}}],"text":"1,968 Followers"}],"alignment":"left"},"height":16,"constraintValues":{"left":141.8106666666667,"height":16,"width":100},"blending":"normal","autoSize":true});var __layer_16__ = new Layer({"parent":info,"name":"Location & Link","backgroundColor":null,"width":121,"x":9,"height":21,"constraintValues":{"left":null,"height":21,"centerAnchorX":0.1853333333333333,"width":121,"top":null,"centerAnchorY":0.6626794258373205},"blending":"normal","clip":false,"borderStyle":"solid","y":128});var __layer_17__ = new TextLayer({"parent":__layer_16__,"name":"New York, NY","backgroundColor":null,"width":90,"x":22,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"15.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"},"startIndex":0,"endIndex":12}],"text":"New York, NY"}],"alignment":"left"},"height":18,"constraintValues":{"left":22.47,"height":18,"width":90},"blending":"normal","autoSize":true});var __layer_18__ = new Layer({"parent":__layer_16__,"name":"Icon: Location","backgroundColor":null,"width":12,"height":14,"constraintValues":{"height":14,"width":12,"top":2.496666666666667},"blending":"normal","clip":false,"borderStyle":"solid","y":2});var __layer_19__ = new SVGLayer({"parent":__layer_18__,"name":".SVGLayer","backgroundColor":null,"width":11.984,"stroke":"rgba(101,120,134,1)","strokeWidth":0.9986666666666667,"htmlIntrinsicSize":{"height":13.98133333333333,"width":11.984},"rotation":null,"height":13.98133333333333,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"11.984\" height=\"13.981\"><path d=\"M 5.992 13.981 C 6.491 13.981 11.984 9.301 11.984 5.992 C 11.984 2.683 9.301 0 5.992 0 C 2.683 0 0 2.683 0 5.992 C 0 9.301 5.493 13.981 5.992 13.981 Z\" fill=\"transparent\" stroke-miterlimit=\"10\" name=\"Oval 8\"><\/path><\/svg>"});var __layer_20__ = new SVGLayer({"parent":__layer_18__,"name":".SVGLayer","backgroundColor":null,"width":4.993333333333333,"stroke":"rgba(101,120,134,1)","strokeWidth":0.9986666666666667,"x":3.495333333333333,"htmlIntrinsicSize":{"height":4.993333333333333,"width":4.993333333333333},"rotation":null,"height":4.993333333333333,"opacity":null,"y":2.996,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"4.993\" height=\"4.993\"><g><defs><path d=\"M 2.497 4.993 C 3.876 4.993 4.993 3.876 4.993 2.497 C 4.993 1.118 3.876 0 2.497 0 C 1.118 0 0 1.118 0 2.497 C 0 3.876 1.118 4.993 2.497 4.993 Z\" id=\"shape_id_L7dHU3Zkz\"><\/path><clipPath id=\"shape_id_L7dHU3Zkz_clip\"><use xlink:href=\"#shape_id_L7dHU3Zkz\"><\/use><\/clipPath><\/defs><use xlink:href=\"#shape_id_L7dHU3Zkz\" fill=\"transparent\" clip-path=\"url(#shape_id_L7dHU3Zkz_clip)\" stroke-miterlimit=\"10\" name=\"Oval 9\"><\/use><\/g><\/svg>","strokeWidthMultiplier":2});var __layer_21__ = new TextLayer({"parent":info,"name":"Product Design Lead","backgroundColor":null,"width":355,"x":10,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":32,"css":{"fontSize":"15.98px","letterSpacing":"0.0px","lineHeight":"1.4","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif","WebkitTextFillColor":"rgb(20, 23, 26)"}}],"text":"Product Design Lead at Huge Inc."},{"inlineStyles":[{"startIndex":0,"endIndex":0,"css":{"fontSize":"16px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif","WebkitTextFillColor":"rgb(0, 0, 0)"}}],"text":""}],"alignment":"left"},"height":21,"constraintValues":{"left":null,"height":21,"centerAnchorX":0.5,"width":355,"top":null,"centerAnchorY":0.5382775119617225},"blending":"normal","autoSize":false,"y":102});var __layer_22__ = new Layer({"parent":info,"name":"name","backgroundColor":null,"width":156,"x":9,"height":42,"constraintValues":{"left":9,"height":42,"centerAnchorX":0.232,"width":156,"top":44,"centerAnchorY":0.3110047846889952},"blending":"normal","clip":false,"borderStyle":"solid","y":44});var __layer_23__ = new TextLayer({"parent":__layer_22__,"name":"@","backgroundColor":null,"width":15,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.9px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"},"startIndex":0,"endIndex":1}],"text":"@"}],"alignment":"left"},"height":16,"constraintValues":{"height":16,"width":15,"top":24.46733333333333},"blending":"normal","autoSize":true,"y":24});var __layer_24__ = new TextLayer({"parent":__layer_22__,"name":"cardosoandre","backgroundColor":null,"width":79,"x":13,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"13.48px","WebkitTextFillColor":"rgb(101, 119, 134)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"},"startIndex":0,"endIndex":12}],"text":"cardosoandre"}],"alignment":"left"},"height":15,"constraintValues":{"left":13,"height":15,"centerAnchorX":0.3365384615384616,"width":79,"bottom":2,"top":null,"centerAnchorY":0.7738095238095238},"blending":"normal","autoSize":true,"y":25});var __layer_25__ = new TextLayer({"parent":__layer_22__,"name":"Andre Cardoso","backgroundColor":null,"width":153,"x":1,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"21.47px","WebkitTextFillColor":"rgb(20, 23, 26)","whiteSpace":"pre","letterSpacing":"0.0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Heavy\", \"SFProDisplay-Heavy\", \"SFUIDisplay-Heavy\", \".SFUIDisplay-Heavy\", sans-serif"},"startIndex":0,"endIndex":13}],"text":"Andre Cardoso"}],"alignment":"left"},"height":25,"constraintValues":{"left":0.9986666666666667,"height":25,"width":153},"blending":"normal","autoSize":true});var __layer_26__ = new Layer({"parent":info,"name":"editBt","backgroundColor":null,"width":97,"x":268,"height":32,"constraintValues":{"left":null,"height":32,"centerAnchorX":0.844,"width":97,"right":10,"top":11,"centerAnchorY":0.1291866028708134},"blending":"normal","clip":false,"borderStyle":"solid","y":11});var __layer_27__ = new Layer({"parent":__layer_26__,"name":"Edit Profile","backgroundColor":null,"width":97,"height":32,"constraintValues":{"height":32,"centerAnchorX":0.5,"width":97,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_28__ = new SVGLayer({"parent":__layer_27__,"name":".SVGLayer","backgroundColor":null,"width":96,"stroke":"rgba(30,161,241,1)","strokeWidth":0.9986666666666667,"htmlIntrinsicSize":{"height":32,"width":96},"rotation":null,"height":32,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"96\" height=\"32\"><g><defs><path d=\"M 0 16 C 0 7.163 7.163 0 16 0 L 80 0 C 88.837 0 96 7.163 96 16 L 96 16 C 96 24.837 88.837 32 80 32 L 16 32 C 7.163 32 0 24.837 0 16 Z\" id=\"shape_id_egiGtzBmQ\"><\/path><clipPath id=\"shape_id_egiGtzBmQ_clip\"><use xlink:href=\"#shape_id_egiGtzBmQ\"><\/use><\/clipPath><\/defs><use xlink:href=\"#shape_id_egiGtzBmQ\" fill=\"transparent\" clip-path=\"url(#shape_id_egiGtzBmQ_clip)\" stroke-miterlimit=\"10\" name=\"Rectangle 5\"><\/use><\/g><\/svg>","strokeWidthMultiplier":2});var __layer_29__ = new TextLayer({"parent":__layer_27__,"name":"Edit profile","backgroundColor":null,"width":72,"x":12,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"14.98px","WebkitTextFillColor":"rgb(30, 161, 241)","whiteSpace":"pre","letterSpacing":"0.2px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay\", \"SFProDisplay-Regular\", \"SFUIDisplay-Regular\", \".SFUIDisplay\", sans-serif"},"startIndex":0,"endIndex":12}],"text":"Edit profile"}],"alignment":"left"},"height":18,"constraintValues":{"left":null,"height":18,"centerAnchorX":0.4948453608247423,"width":72,"top":6,"centerAnchorY":0.46875},"blending":"normal","autoSize":true,"y":6});var avatar = new Layer({"parent":profile,"name":"avatar","backgroundColor":null,"width":70,"x":8,"height":70,"constraintValues":{"left":8,"height":70,"centerAnchorX":0.1173333333333333,"width":70,"top":87,"centerAnchorY":0.184407796101949},"blending":"normal","clip":false,"borderStyle":"solid","y":87});var navBar = new Layer({"parent":profile,"name":"navBar","backgroundColor":"rgba(255,255,255,1)","width":375,"height":49,"constraintValues":{"height":49,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.9632683658170914},"blending":"normal","clip":false,"borderStyle":"solid","y":618});var __layer_30__ = new SVGLayer({"parent":navBar,"name":".SVGLayer","backgroundColor":"rgba(255,255,255,1)","width":375,"strokeWidth":0.5,"htmlIntrinsicSize":{"height":48,"width":375},"rotation":null,"height":48,"fill":"rgba(255,255,255,1)","opacity":null,"y":1,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"375\" height=\"48\"><path d=\"M 0 0 L 375 0 L 375 48 L 0 48 Z\" name=\"BG\"><\/path><\/svg>"});var __layer_31__ = new SVGLayer({"parent":navBar,"name":".SVGLayer","backgroundColor":null,"width":374.5,"stroke":"rgba(238,241,243,1)","strokeWidth":0.5,"x":0.5,"htmlIntrinsicSize":{"height":1.5,"width":374.5},"rotation":null,"height":1.5,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"374.5\" height=\"1.5\"><path d=\"M 374.25 0.75 L 0.245 0.75\" fill=\"transparent\" stroke-width=\"0.5\" stroke-miterlimit=\"10\" name=\"Div\"><\/path><\/svg>"});var __layer_32__ = new Layer({"parent":navBar,"name":"messagesIcon","backgroundColor":null,"width":21,"x":318,"height":17,"constraintValues":{"left":318,"height":17,"width":21,"top":19.24000000000001},"blending":"normal","clip":false,"borderStyle":"solid","y":19});var __layer_33__ = new SVGLayer({"parent":__layer_32__,"htmlIntrinsicSize":{"height":16.32,"width":20.50000000000001},"height":16.32,"name":".SVGLayer","backgroundColor":"rgba(102,117,128,1)","opacity":null,"width":20.50000000000001,"strokeWidth":1,"x":0.4999999999999999,"y":-0.000000000000006217248937900877,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"20.5\" height=\"16.32\"><path d=\"M 2 1.44 C 1.667 1.44 1.397 1.701 1.397 2.023 L 1.397 14.297 C 1.397 14.619 1.667 14.88 2 14.88 L 18.397 14.88 C 18.73 14.88 19 14.619 19 14.297 L 19 1.92 C 19 1.598 18.73 1.337 18.397 1.337 Z M 2.412 0 L 18.088 0 C 19.42 0 20.5 1.044 20.5 2.331 L 20.5 13.989 C 20.5 15.276 19.42 16.32 18.088 16.32 L 2.412 16.32 C 1.08 16.32 0 15.276 0 13.989 L 0 2.331 C -0 1.044 1.08 0 2.412 0 Z\" fill=\"rgba(102,117,128,1)\" name=\"Rectangle 13\"><\/path><\/svg>","rotation":null});var __layer_34__ = new SVGLayer({"parent":__layer_32__,"name":".SVGLayer","backgroundColor":"rgba(102,117,128,1)","width":20.5,"strokeWidth":1,"x":0.4240807477822273,"htmlIntrinsicSize":{"height":7.62273137183008,"width":20.5},"rotation":null,"height":7.62273137183008,"fill":"rgba(102,117,128,1)","opacity":null,"y":1.44,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"20.5\" height=\"7.623\"><path d=\"M 0 1.091 L 8.04 6.92 C 9.332 7.857 11.168 7.857 12.46 6.92 L 20.5 1.091 L 19.514 0 L 11.514 5.76 C 10.927 6.186 9.435 6.186 8.847 5.76 L 0.847 0 Z\" name=\"Path 3\"><\/path><\/svg>"});var __layer_35__ = new Layer({"parent":navBar,"name":"notificationIcon","backgroundColor":null,"width":21,"x":225,"height":19,"constraintValues":{"left":225,"height":19,"width":21,"top":17.79999999999995},"blending":"normal","clip":false,"borderStyle":"solid","y":18});var __layer_36__ = new SVGLayer({"parent":__layer_35__,"htmlIntrinsicSize":{"height":15.36,"width":19.86857780435562},"height":15.36,"name":".SVGLayer","backgroundColor":"rgba(102,117,128,1)","opacity":null,"width":19.86857780435562,"strokeWidth":1,"x":0.4329829754844455,"y":-0.0000000000000000000000000000002931152172436341,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"19.869\" height=\"15.36\"><path d=\"M 15.552 12.567 L 15.552 7.131 C 15.552 4.102 12.985 1.646 9.817 1.646 C 6.65 1.646 4.082 4.102 4.082 7.131 L 4.082 12.567 L 2.567 13.92 L 17.067 13.92 Z M 9.817 0 C 13.935 -0 17.273 3.193 17.273 7.131 L 17.273 12.069 C 18.4 13.046 19.165 13.823 19.567 14.4 C 19.969 14.977 19.969 15.297 19.567 15.36 L 0.067 15.36 C -0.034 14.864 -0.034 14.544 0.067 14.4 C 0.168 14.256 0.932 13.479 2.361 12.069 L 2.361 7.131 C 2.361 3.193 5.699 0 9.817 0 Z\" fill=\"rgba(102,117,128,1)\" name=\"Rectangle 14\"><\/path><\/svg>","rotation":null});var __layer_37__ = new SVGLayer({"parent":__layer_35__,"htmlIntrinsicSize":{"height":4.800000000000001,"width":10},"height":4.800000000000001,"name":".SVGLayer","backgroundColor":"rgba(102,117,128,1)","opacity":null,"width":10,"strokeWidth":1,"x":5.5,"y":14.4,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"10\" height=\"4.8\"><path d=\"M 0.159 -0 L 9.841 -0 C 9.947 0.033 10 0.122 10 0.267 C 10 2.77 7.761 4.8 5 4.8 C 2.239 4.8 0 2.77 0 0.267 C 0 0.122 0.053 0.033 0.159 -0 Z M 5 3.2 C 6.688 3.2 8.074 2.028 8.222 0.533 L 1.778 0.533 C 1.926 2.028 3.312 3.2 5 3.2 Z\" fill=\"rgba(102,117,128,1)\" name=\"Combined Shape\"><\/path><\/svg>","rotation":null});var __layer_38__ = new Layer({"parent":navBar,"name":"searchIcon","backgroundColor":null,"width":19,"x":132,"height":18,"constraintValues":{"left":132,"height":18,"width":19,"top":17.79999999999995},"blending":"normal","clip":false,"borderStyle":"solid","y":18});var __layer_39__ = new SVGLayer({"parent":__layer_38__,"name":".SVGLayer","backgroundColor":null,"width":17.5,"stroke":"rgba(100,119,133,1)","strokeWidth":1.75,"htmlIntrinsicSize":{"height":16.8,"width":17.5},"rotation":null,"height":16.8,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"17.5\" height=\"16.8\"><g><defs><path d=\"M 8.75 16.8 C 13.582 16.8 17.5 13.039 17.5 8.4 C 17.5 3.761 13.582 0 8.75 0 C 3.918 0 0 3.761 0 8.4 C 0 13.039 3.918 16.8 8.75 16.8 Z\" id=\"shape_id_T7IRxeiIb\"><\/path><clipPath id=\"shape_id_T7IRxeiIb_clip\"><use xlink:href=\"#shape_id_T7IRxeiIb\"><\/use><\/clipPath><\/defs><use xlink:href=\"#shape_id_T7IRxeiIb\" fill=\"transparent\" clip-path=\"url(#shape_id_T7IRxeiIb_clip)\" stroke-miterlimit=\"10\" name=\"Oval 3\"><\/use><\/g><\/svg>","strokeWidthMultiplier":2});var __layer_40__ = new SVGLayer({"parent":__layer_38__,"name":".SVGLayer","backgroundColor":null,"width":4.5,"stroke":"rgba(100,119,133,1)","strokeWidth":1.75,"x":14.5,"htmlIntrinsicSize":{"height":4.319999999999999,"width":4.5},"rotation":null,"height":4.319999999999999,"opacity":null,"y":13.92,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"4.5\" height=\"4.32\"><path d=\"M 4.25 4.08 L 0.25 0.24\" fill=\"transparent\" stroke-width=\"1.75\" stroke-miterlimit=\"10\" name=\"Line\"><\/path><\/svg>"});var __layer_41__ = new Layer({"parent":navBar,"name":"homeIcon","backgroundColor":null,"width":24,"x":36,"height":24,"constraintValues":{"left":36,"height":24,"width":24,"top":13},"blending":"normal","clip":false,"borderStyle":"solid","y":13});var __layer_42__ = new SVGLayer({"parent":__layer_41__,"htmlIntrinsicSize":{"height":19.67999999999999,"width":23},"height":19.67999999999999,"name":".SVGLayer","backgroundColor":"rgba(30,161,241,1)","opacity":null,"width":23,"strokeWidth":1,"y":4.32,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"23\" height=\"19.68\"><path d=\"M 20.878 7.181 L 19.067 17.281 C 18.819 18.665 17.531 19.68 16.022 19.68 L 7.478 19.68 C 5.969 19.68 4.681 18.665 4.433 17.281 L 2.626 7.198 L 0.857 7.2 L 0 6.286 L 12.062 0 L 23 6.307 L 22.576 7.179 Z\" fill=\"rgba(30,161,241,1)\" name=\"Icon: Home\"><\/path><\/svg>","rotation":null});var __layer_43__ = new SVGLayer({"parent":__layer_41__,"name":".SVGLayer","backgroundColor":"rgba(255,255,255,1)","width":6.5,"strokeWidth":1,"x":8.5,"htmlIntrinsicSize":{"height":6.24,"width":6.5},"rotation":null,"height":6.24,"fill":"rgba(255,255,255,1)","opacity":null,"y":12,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6.5\" height=\"6.24\"><path d=\"M 3.25 6.24 C 5.045 6.24 6.5 4.843 6.5 3.12 C 6.5 1.397 5.045 0 3.25 0 C 1.455 0 0 1.397 0 3.12 C 0 4.843 1.455 6.24 3.25 6.24 Z\" name=\"Path\"><\/path><\/svg>"});var __layer_44__ = new SVGLayer({"parent":__layer_41__,"name":".SVGLayer","backgroundColor":"rgba(30,161,241,1)","width":6,"strokeWidth":1,"x":17.5,"htmlIntrinsicSize":{"height":5.76,"width":6},"rotation":null,"height":5.76,"fill":"rgba(30,161,241,1)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"5.76\"><path d=\"M 3 5.76 C 4.657 5.76 6 4.471 6 2.88 C 6 1.289 4.657 0 3 0 C 1.343 0 0 1.289 0 2.88 C 0 4.471 1.343 5.76 3 5.76 Z\" name=\"Path\"><\/path><\/svg>"});if(__layer_25__ !== undefined){__layer_25__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_25__","vekterClass":"TextNode","text":"Andre Cardoso"}};if(__layer_36__ !== undefined){__layer_36__.__framerInstanceInfo = {"framerClass":"SVGLayer","hash":"#vekter|__layer_36__","vekterClass":"BooleanShapeNode","pathBooleanName":"Join"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_10__","vekterClass":"TextNode","text":"Media"}};if(navBar !== undefined){navBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|navBar","targetName":"navBar","vekterClass":"FrameNode"}};if(__layer_35__ !== undefined){__layer_35__.__framerInstanceInfo = {"hash":"#vekter|__layer_35__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_21__ !== undefined){__layer_21__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_21__","vekterClass":"TextNode","text":"Product Design Lead at Huge Inc.\n"}};if(tab !== undefined){tab.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|tab","targetName":"tab","vekterClass":"FrameNode"}};if(__layer_43__ !== undefined){__layer_43__.__framerInstanceInfo = {"hash":"#vekter|__layer_43__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_31__ !== undefined){__layer_31__.__framerInstanceInfo = {"hash":"#vekter|__layer_31__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_26__ !== undefined){__layer_26__.__framerInstanceInfo = {"hash":"#vekter|__layer_26__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_18__ !== undefined){__layer_18__.__framerInstanceInfo = {"hash":"#vekter|__layer_18__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_27__ !== undefined){__layer_27__.__framerInstanceInfo = {"hash":"#vekter|__layer_27__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_14__","vekterClass":"TextNode","text":"758 Following"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_15__","vekterClass":"TextNode","text":"1,968 Followers"}};if(__layer_19__ !== undefined){__layer_19__.__framerInstanceInfo = {"hash":"#vekter|__layer_19__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_39__ !== undefined){__layer_39__.__framerInstanceInfo = {"hash":"#vekter|__layer_39__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"hash":"#vekter|__layer_13__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_11__","vekterClass":"TextNode","text":"Tweets & replies"}};if(headerMeta !== undefined){headerMeta.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|headerMeta","targetName":"headerMeta","vekterClass":"FrameNode"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"Andre Cardoso"}};if(coverImg !== undefined){coverImg.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|coverImg","targetName":"coverImg","vekterClass":"FrameNode"}};if(__layer_30__ !== undefined){__layer_30__.__framerInstanceInfo = {"hash":"#vekter|__layer_30__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_28__ !== undefined){__layer_28__.__framerInstanceInfo = {"hash":"#vekter|__layer_28__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_22__ !== undefined){__layer_22__.__framerInstanceInfo = {"hash":"#vekter|__layer_22__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(profile !== undefined){profile.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|profile","targetName":"profile","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_9__","vekterClass":"TextNode","text":"Likes"}};if(__layer_32__ !== undefined){__layer_32__.__framerInstanceInfo = {"hash":"#vekter|__layer_32__","vekterClass":"FrameNode","framerClass":"Layer"}};if(headerActions !== undefined){headerActions.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|headerActions","targetName":"headerActions","vekterClass":"FrameNode"}};if(__layer_44__ !== undefined){__layer_44__.__framerInstanceInfo = {"hash":"#vekter|__layer_44__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_0__","vekterClass":"TextNode","text":"1,854 Tweets"}};if(header !== undefined){header.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|header","targetName":"header","vekterClass":"FrameNode"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_12__","vekterClass":"TextNode","text":"Tweets"}};if(__layer_42__ !== undefined){__layer_42__.__framerInstanceInfo = {"framerClass":"SVGLayer","hash":"#vekter|__layer_42__","vekterClass":"BooleanShapeNode","pathBooleanName":"Join"}};if(__layer_41__ !== undefined){__layer_41__.__framerInstanceInfo = {"hash":"#vekter|__layer_41__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_23__ !== undefined){__layer_23__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_23__","vekterClass":"TextNode","text":"@"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(info !== undefined){info.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|info","targetName":"info","vekterClass":"FrameNode"}};if(__layer_37__ !== undefined){__layer_37__.__framerInstanceInfo = {"framerClass":"SVGLayer","hash":"#vekter|__layer_37__","vekterClass":"BooleanShapeNode","pathBooleanName":"Join"}};if(__layer_20__ !== undefined){__layer_20__.__framerInstanceInfo = {"hash":"#vekter|__layer_20__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_40__ !== undefined){__layer_40__.__framerInstanceInfo = {"hash":"#vekter|__layer_40__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_29__ !== undefined){__layer_29__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_29__","vekterClass":"TextNode","text":"Edit profile"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_24__ !== undefined){__layer_24__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_24__","vekterClass":"TextNode","text":"cardosoandre"}};if(__layer_33__ !== undefined){__layer_33__.__framerInstanceInfo = {"framerClass":"SVGLayer","hash":"#vekter|__layer_33__","vekterClass":"BooleanShapeNode","pathBooleanName":"Join"}};if(__layer_38__ !== undefined){__layer_38__.__framerInstanceInfo = {"hash":"#vekter|__layer_38__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"hash":"#vekter|__layer_16__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_34__ !== undefined){__layer_34__.__framerInstanceInfo = {"hash":"#vekter|__layer_34__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(avatar !== undefined){avatar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|avatar","targetName":"avatar","vekterClass":"FrameNode"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_17__ !== undefined){__layer_17__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_17__","vekterClass":"TextNode","text":"New York, NY"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {profile, header, coverImg, headerMeta, headerActions, tab, info, avatar, navBar});scope["__vekterVariables"] = ["profile", "header", "coverImg", "headerMeta", "headerActions", "tab", "info", "avatar", "navBar"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);