$(function () {
    filterChange();
    filterCheckbox();
    snippetImg();
    forms();
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
        console.log("filter checkbox ");
        const thisObj = $(this);
        let data = [],
            parent = thisObj.parents("[data-type=filter-parent]"),
            count = 0;

        data = {
            ajax: 1,
        }

        parent.find("[data-type=js-filter-checkbox]").each(function () {
            let field = $(this).attr("data-code");
            data[field] = [];
        });

        parent.find("[data-type=js-filter-checkbox]").each(function () {
            if ($(this).is(":checked")) {
                let field = $(this).attr("data-code"),
                    val = $(this).val();

                data[field][count] = val;
                count++
            }
        });

        console.log(data);

        $.ajax({
            type: "POST",
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

function forms() {
    $(document).on("submit", "[data-type=js-form]", function (e) {
        console.log("form submit");
        e.preventDefault();

        let form = $(this),
            url = form.attr("data-url"),
            contentType = "application/x-www-form-urlencoded; charset=UTF-8",
            processData = true,
            count = 0,
            data = {};

        form.find("[data-type=get-field]").each(function () {
            let field = $(this).attr("data-uf"),
                val = $(this).val();

            data[field] = val;

        });

        form.find("[data-type=get-field-multi]").each(function () {
            let field = $(this).attr("data-uf");

            data[field] = [];
        });

        form.find("[data-type=get-field-multi]").each(function () {
            if ($(this).is(":checked")) {
                let field = $(this).attr("data-uf"),
                    val = $(this).attr("text");

                data[field][count] = val;
                count++
            }
        });

        form.find("[data-type=get-field-radio]").each(function () {
            if ($(this).is(":checked")) {
                let field = $(this).attr("data-uf"),
                    val = $(this).attr("data-value");

                data[field] = val;
            }
        });

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            contentType: contentType,
            processData: processData,
            data: data,
            success: function (r) {
                console.log(r);
            },
        });
    });
}