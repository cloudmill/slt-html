import { initMap } from './map.js';
import { swiperInit } from './swipers.js';

$(function () {
    filterChange();
    filterCheckbox();
    filterList();
    filterClickColor();
    snippetImg();
    forms();
    videoModal();
    workModal();
    add2basket();
    deleteBasket();
    changeLenBasket();
    addresAdd2Order();
    clearBasket();
    searchAjax();
    searchHead();
    filterClickSec();
    mapModal();
    filterObj();
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
            city = thisObj.val(),
            tags = [],
            count = 0;

        console.log("filter change  " + city);

        $(document).find("[data-type=js-filter-list]").each(function () {
            if ($(this).hasClass("is-active")) {
                let prop = $(this).attr("data-value");

                tags[count] = prop;
                count++
            }
        });

        console.log(tags);
        console.log(city);

        $(this).addClass('active-city');

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                city: city,
                tags: tags
            },
            success: function (r) {
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));

                initMap();
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function filterObj() {
    $(document).on("change", "[data-type=js-filter-obj]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            val = thisObj.val(),
            location = [],
            type = [],
            category = [],
            count = 0;

        console.log("filter change click on " + val);

        $(document).find("[data-objects-item]").each(function () {
            if ($(this).hasClass("active")) {
                let item = $(this).find("[data-type=js-filter-obj]"),
                    code = item.attr("data-code"),
                    val = item.val();

                if (code == 'location') {
                    location[count] = val;
                }
                if (code == 'type') {
                    type[count] = val;
                }
                if (code == 'category') {
                    category[count] = val;
                }

                count++
            }
        });

        console.log(location);
        console.log(type);
        console.log(category);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                location: location,
                type: type,
                category: category
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

function filterList() {
    $(document).on("click", "[data-type=js-filter-list]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            parent = thisObj.parents('#filters-container'),
            count = 0,
            value = [],
            city = '',
            inputCity = $(document).find('.active-city');

        console.log("filter list ");

        parent.find("[data-type=js-filter-list]").each(function () {
            if ($(this).hasClass("is-active")) {
                let prop = $(this).attr("data-value");

                value[count] = prop;
                count++
            }
        });

        if (inputCity) {
            city = inputCity.val();
        }

        console.log(value);
        console.log(city);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                tags: value,
                city: city,
            },
            success: function (r) {
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));

                initMap();
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

export function filterCheckbox() {
    $(document).on("change click", "[data-type=js-filter-checkbox]", function (e) {

        let data = [],
            parent = $(document).find("[data-type=filter-parent]"),
            count = 0,
            arUrl = window.location.href.split('?'),
            showModal = $(this).attr("data-show-modal"),
            showCount = parent.attr("data-show-count");

        if (showModal) {
            showCount = false;
        }

        console.log(showModal);
        console.log(showCount);

        if (showCount == 'before') {
            data = {
                ajaxShowCount: 1,
            }
        } else {
            data = {
                ajax: 1,
            }
        }

        parent.find("[data-type=js-filter-checkbox]").each(function () {
            let field = $(this).attr("data-code");
            data[field] = [];
        });

        parent.find("[data-type=js-filter-checkbox]").each(function () {
            let parentLi = $(this).parents("[data-objects-item]");

            if (parentLi) {
                parentLi = $(this).parents("[data-catalog-item]");
            }

            if (parentLi.hasClass("active")) {
                let field = $(this).attr("data-code"),
                    val = $(this).val();

                data[field][count] = val;
                count++
            }
        });

        console.log(data);

        $.ajax({
            type: "POST",
            url: arUrl[0],
            data: data,
            success: function (r) {
                if (showCount == 'before') {
                    let strAnswer = 'Подходит позиций: ' + r + '',
                        countCatalog = $(document).find('[data-type=count-catalog-filter]');

                    console.log(data);
                    console.log(strAnswer);

                    countCatalog.empty();
                    countCatalog.append(strAnswer);
                } else {
                    $(document).find('[data-type=items-container-full]').empty();
                    $(document).find('[data-type=items-container-full]').append($(r));
                }
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
                if (r.type == 'order') {
                    window.location.href = r.url;
                }
                if (r.type == 'sub') {
                    $(document).find('[data-type=sub-resp-ttl]').empty();
                    $(document).find('[data-type=sub-resp-ttl]').text(r.ttl);

                    $(document).find('[data-type=sub-resp-desc]').empty();
                    $(document).find('[data-type=sub-resp-desc]').text(r.desc);
                }
            },
        });
    });
}

function filterClickColor() {
    $(document).on("click", "[data-type=js-filter-color]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            color = thisObj.attr("data-color");

        console.log("filter color - " + color);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                color: color,
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

function add2basket() {
    $(document).on("click", "[data-type=add2basket]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            url = thisObj.parents("[data-type=items-container-full]").attr("data-url"),
            type = thisObj.attr("data-add"),
            letReq = thisObj.attr("data-let"),
            offerId = thisObj.attr("data-id-offer"),
            par = thisObj.parents("[data-type=par]"),
            sib = par.siblings("[data-type=sib]"),
            count = sib.find("[data-type=count]").val(),
            data = {};

        if (type == 'add') {
            thisObj.attr("data-add", "change")
        }

        if (letReq == 'let') {
            thisObj.attr("data-let", "no")
        }

        if (letReq == 'no') {
            thisObj.attr("data-let", "let")
        }

        console.log(type);

        data['offer'] = offerId;
        data['count'] = count;
        data['type'] = type;

        console.log("add2basket");

        if (letReq == 'let') {
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                data: data,
                success: function (r) {
                    console.log(r);
                    if (r.success == true) {
                        $(document).find('[data-type=basket_count]').empty();
                        $(document).find('[data-type=basket_count]').html(r.count);
                    }
                },
                error: function (r) {
                    console.debug(r);
                }
            });
        }
    });
}

function deleteBasket() {
    $(document).on("click", "[data-type=basket-delete]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            id = thisObj.attr("data-id"),
            type = 'delete',
            data = {};

        data['id'] = id;
        data['type'] = type;

        console.log("delete basket");

        $.ajax({
            type: "POST",
            url: "/local/templates/main/include/ajax/basket.php",
            dataType: "json",
            data: data,
            success: function (r) {
                console.log(r);
                if (r.success == true) {

                    if (r.count < 1) {
                        location.reload();
                    }

                    if (r.count > 0) {
                        $(document).find('[data-type=basket_count]').empty();
                        $(document).find('[data-type=basket_count]').html(r.count);
    
                        let countOrderPage = r.count;
    
                        $.ajax({
                            method: "POST",
                            url: window.location.href,
                            data: {
                                ajax: 1,
                            },
                            success: function (r) {
                                $(document).find('[data-type=items-container-full]').empty();
                                $(document).find('[data-type=items-container-full]').append($(r));
                            },
                            error: function (r) {
                                console.debug(r);
                            }
                        });
    
                        $.ajax({
                            method: "POST",
                            url: window.location.href,
                            data: {
                                ajax2: 1,
                            },
                            success: function (r) {
                                let countOrder = '<h5 class="order-page__panel-title">Товарных позиций в заказе: ' + countOrderPage + '</h5>';
    
                                $(document).find('[data-type=order-page-count]').empty();
                                $(document).find('[data-type=order-page-count]').append(countOrder);
                            },
                            error: function (r) {
                                console.debug(r);
                            }
                        });
                    }
                }
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function changeLenBasket() {
    $(document).on("change", "[data-type=change-length-m]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            id = thisObj.attr("data-id"),
            length = thisObj.attr("data-length"),
            val = thisObj.val(),
            type = 'change',
            data = {};

        data['offer'] = id;
        data['type'] = type;
        data['count'] = val / length;

        console.log("change basket");
        console.log(data);

        $.ajax({
            type: "POST",
            url: "/local/templates/main/include/ajax/basket.php",
            dataType: "json",
            data: data,
            success: function (r) {
                console.log(r);
                if (r.success == true) {

                    $(document).find('[data-type=basket_count]').empty();
                    $(document).find('[data-type=basket_count]').html(r.count);

                    $.ajax({
                        method: "POST",
                        url: window.location.href,
                        data: {
                            ajax: 1,
                        },
                        success: function (r) {
                            $(document).find('[data-type=items-container-full]').empty();
                            $(document).find('[data-type=items-container-full]').append($(r));
                        },
                        error: function (r) {
                            console.debug(r);
                        }
                    });
                }
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function addresAdd2Order() {
    $(document).on("change", "[data-type=change-address]", function (e) {
        e.preventDefault();

        $(document).find("[data-uf=UF_ADDRES]").each(function () {
            $(this).attr(required, "required");
        });
    });
}

function clearBasket() {
    $(document).on("click", "[data-type=order-clear]", function (e) {
        e.preventDefault();

        let type = 'clear',
            data = {};

        data['type'] = type;

        console.log("clear basket");

        $.ajax({
            type: "POST",
            url: "/local/templates/main/include/ajax/basket.php",
            dataType: "json",
            data: data,
            success: function (r) {
                console.log(r);
                if (r.success == true) {
                    window.location.href = "/order/";
                }
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function searchAjax() {
    $(document).on("click", "[data-type=search-ajax]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            sibIn = thisObj.siblings('[data-type=s-sib-input]'),
            inputSearch = sibIn.find('[data-type=s-input]'),
            search = inputSearch.val();

        console.log("search " + search + " ");

        $.ajax({
            method: "GET",
            url: window.location.href,
            data: {
                ajax: 1,
                q: search,
            },
            success: function (r) {

                console.log(r);
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}

function searchHead() {
    $(document).on("click", "[data-type=search-head]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            searchForm = thisObj.parents('[data-type=search-form]'),
            inputSearch = searchForm.find('[data-type=search-input]'),
            search = inputSearch.val(),
            pathSearch = '/search/?q=' + search + '';

        console.log("search " + search + " // " + pathSearch + "");

        window.location.href = pathSearch;
    });
}

function filterClickSec() {
    $(document).on("click", "[data-type=sec-prog]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            section = thisObj.attr("data-id");


        $.ajax({
            method: "GET",
            url: window.location.href,
            data: {
                ajax: 1,
                section: section,
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

function mapModal() {
    window.addEventListener("mapModalOpen", (e) => {
        let id = e.detail.modalId,
            data = {};

        data['id'] = id;

        console.log("mapModalOpen - " + id);

        $.ajax({
            type: "POST",
            url: "/local/templates/main/include/ajax/map_modal.php",
            data: data,
            success: function (r) {
                $(document).find('[data-type=modal-map]').empty();
                $(document).find('[data-type=modal-map]').append($(r));

                swiperInit();
            },
            error: function (r) {
                console.debug(r);
            }
        });
    })
}