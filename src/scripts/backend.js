$(function () {
    filterChange();
    filterCheckbox();
    snippetImg();
    forms();
    videoModal();
    workModal();
});

function workModal() {
    $(document).on("click", "[data-type=work-modal]", function (e) {
        const thisObj = $(this);
        let ttl = thisObj.attr("data-text"),
            id = thisObj.attr("data-id"),
            modalId = thisObj.attr("data-fancy-button"),
            modal = $(document).find('[data-fancy-modal=' + modalId + ']'),
            modalTtl = modal.find('[data-type=ttl]'),
            modalInputVacID = modal.find('[data-uf=UF_VAC_ID]');

        modalTtl.html(ttl);
        modalInputVacID.val(id);
    });
}

function videoModal() {
    $(document).on("click", "[data-fancy-button=video]", function (e) {
        const thisObj = $(this);
        let video = thisObj.attr("data-video");

        $(document).find('[data-type=iframe-video-modal]').attr('src', video);
    });
}

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
            count = 0,
            file = form.find('[data-type=get-field-file]').length ? form.find('[data-type=get-field-file]') : false,
            contentType = file ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
            processData = file ? false : true,
            data = file ? new FormData() : {};

        if (file) {
            $.each(file.files, function (key, input) {
                data.append('file[]', input);
            });
            data.append('file', file[0].files[0]);
        }

        form.find("[data-type=get-field]").each(function () {
            let field = $(this).attr("data-uf"),
                val = $(this).val();

            file ? data.append(field, val) : (data[field] = val);
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