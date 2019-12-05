# standup.js

## jQuery Plugins

## 使い方

```html
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery.transform.js"></script>//transformをanimateさせるのに使用。
<script type="text/javascript" src="standup.js"></script>
```

```javascript
$(function(){
  $('body').standup();
});
```

## title id

```html
<h1 id="titleLogo">title</h1>
```

## options
```javascript
$(function(){
  $('body').standup({
    id : '#titleLogo', //サイトのロゴのidをtitleLogo以外にしたい場合にここの記述。idとあるけど、classでも可。
    scale : 3, //ドーンする拡大値。ロゴの大きさによるが2～4ぐらいが適当。
　　left : false, //widthが広い場合に、trueにするとその要素の左端にドーンするようの設定。
　　right : false, //widthが広い場合に、trueにするとその要素の右端にドーンするようの設定。
　　adjust : 0 //上記の左右端にドーンすると要素の端が画面中央にくるので位置微調整用の項目。左に100px動かすならなら「-100」。右に100px動かす場合は「100」と入れる。
});
});
```

## type and demo
- デフォルト
<a href="http://webdrawer.net/sample/js/standup/index.html" target="_blank">デフォルト</a>

- 左寄せ
<a href="http://webdrawer.net/sample/js/standup/index2.html" target="_blank">左寄せ</a>

- 右寄せ
<a href="http://webdrawer.net/sample/js/standup/index3.html" target="_blank">右寄せ</a>


##ブログ
<a href="http://webdrawer.net/javascript/standup.html" target="_blank">[ブログ]</a>
