/**
 * @name Connect
 * @author ContentLTD
 * @description Lets Connect! Bite Me:3
 * @version 1.1.0
 */

module.exports = class Connect {
  start() {
    this.observer = new MutationObserver(() => this.replaceText());
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    this.replaceText();
  }

  stop() {
    if (this.observer) this.observer.disconnect();
  }

  replaceText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;

    while ((node = walker.nextNode())) {
      const originalText = node.textContent;
      let newText = originalText;

      newText = newText.replace(/\bRemove Friend\b/gi, "Remove Connection");
      newText = newText.replace(/\bFriends Since\b/gi, "Connections Since");
      newText = newText.replace(/\bAdd Friend\b/gi, "Add Connection");
      newText = newText.replace(/\bFriends\b/gi, "Connections");
      newText = newText.replace(/\bFriend\b/gi, "Connect");

      if (newText !== originalText) {
        node.textContent = newText;
      }
    }
  }
};
