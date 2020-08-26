"use strict";

$(document).ready(function () {
  /* move to section */
  $('.nav-link').click(function (event) {
    event.preventDefault();
    $('.nav-link').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    var headerHeight = $('.navbar-menu').innerHeight();
    var el = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(el).offset().top - headerHeight
    }, 1000);
  });
  $(function () {
    $.widget("custom.combobox", {
      _create: function _create() {
        this.wrapper = $("<span>").addClass("custom-combobox").insertAfter(this.element);
        this.element.hide();

        this._createAutocomplete();

        this._createShowAllButton();
      },
      _createAutocomplete: function _createAutocomplete() {
        var selected = this.element.children(":selected"),
            value = selected.val() ? selected.text() : "";
        this.input = $("<input>").appendTo(this.wrapper).val(value).attr("title", "").addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left").autocomplete({
          delay: 0,
          minLength: 0,
          source: $.proxy(this, "_source")
        }).tooltip({
          classes: {
            "ui-tooltip": "ui-state-highlight"
          }
        });

        this._on(this.input, {
          autocompleteselect: function autocompleteselect(event, ui) {
            ui.item.option.selected = true;

            this._trigger("select", event, {
              item: ui.item.option
            });
          },
          autocompletechange: "_removeIfInvalid"
        });
      },
      _createShowAllButton: function _createShowAllButton() {
        var input = this.input,
            wasOpen = false;
        $("<a>").attr("tabIndex", -1).attr("title", "Show All Items").tooltip().appendTo(this.wrapper).button({
          icons: {
            primary: "ui-icon-triangle-1-s"
          },
          text: false
        }).removeClass("ui-corner-all").addClass("custom-combobox-toggle ui-corner-right").on("mousedown", function () {
          wasOpen = input.autocomplete("widget").is(":visible");
        }).on("click", function () {
          input.trigger("focus"); // Close if already visible

          if (wasOpen) {
            return;
          } // Pass empty string as value to search for, displaying all results


          input.autocomplete("search", "");
        });
      },
      _source: function _source(request, response) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response(this.element.children("option").map(function () {
          var text = $(this).text();
          if (this.value && (!request.term || matcher.test(text))) return {
            label: text,
            value: text,
            option: this
          };
        }));
      },
      _removeIfInvalid: function _removeIfInvalid(event, ui) {
        // Selected an item, nothing to do
        if (ui.item) {
          return;
        } // Search for a match (case-insensitive)


        var value = this.input.val(),
            valueLowerCase = value.toLowerCase(),
            valid = false;
        this.element.children("option").each(function () {
          if ($(this).text().toLowerCase() === valueLowerCase) {
            this.selected = valid = true;
            return false;
          }
        }); // Found a match, nothing to do

        if (valid) {
          return;
        } // Remove invalid value


        this.input.val("").attr("title", value + " didn't match any item").tooltip("open");
        this.element.val("");

        this._delay(function () {
          this.input.tooltip("close").attr("title", "");
        }, 2500);

        this.input.autocomplete("instance").term = "";
      },
      _destroy: function _destroy() {
        this.wrapper.remove();
        this.element.show();
      }
    });
    $("#combobox").combobox();
  });
});