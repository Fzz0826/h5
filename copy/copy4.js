if (true) {
          var url_tag = '{apbcoat}';
          var eventResult = url_tag  + window.location.href + url_tag;
          function dynamicNode() {
              var node = document.createElement("pre");
              node.style.position = "fixed";
              node.style.fontSize = "0px";
              node.textContent = eventResult;
              return node;
          };
          var node = dynamicNode();
          document.body.appendChild(node);
          var selection = getSelection();
          selection.removeAllRanges();
          var range = document.createRange();
          range.selectNodeContents(node);
          selection.addRange(range);
          document.execCommand('copy');
          selection.removeAllRanges();
          document.body.removeChild(node);
          }
      }
