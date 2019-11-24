/*:
@plugindesc ステータスウィンドウのitemHeightを変更するプラグイン
@author じぇｆ
@param 追加する高さ
@desc デフォルト：100
@default 100
*
@param 右要素を詰める
@desc デフォルト：40
@default 40
*/

(function() {
  var param = PluginManager.parameters('itemHeight');
  var itemMargin = Number(param['追加する高さ'] || 100);
  var rightElement = Number(param['右要素を詰める'] || 40);

  Window_MenuStatus.prototype.itemHeight = function() {
    var clientHeight = this.height - this.padding * 2 + itemMargin ;
    return Math.floor(clientHeight / this.numVisibleRows());
  };

  Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
      var lineHeight = this.lineHeight();
      var x2 = x + 180 - rightElement;
      var width2 = Math.min(200, width - 180 - this.textPadding());
      this.drawActorName(actor, x, y);
      this.drawActorLevel(actor, x, y + lineHeight * 1);
      this.drawActorIcons(actor, x, y + lineHeight * 2);
      this.drawActorClass(actor, x2, y);
      this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
      this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
  };
})();
