(function() {

  Scene_Battle.prototype.changeInputWindow = function() {
    if (BattleManager.isInputting()) {
      if (BattleManager.actor()) {
        this.startActorCommandSelection();
      } else {
        //this.startPartyCommandSelection();
        this.selectNextCommand();
      }
    } else {
      this.endCommandSelection();
    }
  };

  Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
      this.addAttackCommand();
      this.addSkillCommands();
      this.addGuardCommand();
      this.addItemCommand();
      this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
    }
  };

  Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this.addWindow(this._actorCommandWindow);
  };

})();
