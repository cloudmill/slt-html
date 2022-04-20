$(function () {
    filterChange();
    filterCheckbox();
    snippetImg();
});

function snippetImg() {
    $(document).ready(function () {
        let img = $(document).find('[data-type=snippet-img-hide]');

        $(document).find('[data-type=snippet-img-show]').html(img);
    });
}

function filterChange() {
    $(document).on("change", "[data-type=js-filter-change]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            value = thisObj.val();

        console.log("filter change  " + value);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                value: value,
            },
            success: function (r) {
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function filterCheckbox() {
    $(document).on("click", "[data-type=js-filter-checkbox]", function (e) {
        e.preventDefault();

        let parent = $(this).parent("[data-type=filter-parent]"),
            field = $(this).attr("code"),
            val = $(this).attr("value"),
            data = {};

        console.log("filter checkbox ");
        console.log(field + ' - ' + val);
        /*
        parent.find("[data-type=js-filter-checkbox]").each(function (index, element) {
            console.log(index + ' - ' + element);
            if (element.attr(':checked')); {
                let field = element.attr("code"),
                    val = element.attr("value");

                data[field][index] = val;
            }

        });
        */

        data['ajax'] = 1;

        console.log(data);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: data,
            success: function (r) {
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}