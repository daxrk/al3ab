 $(document).ready(function () {
            var items = $("footer span");
            var svgPath = $("#torke svg path");

            items.click(function () {
                items.removeClass("active1");
                $(this).addClass("active1");

                // إعادة جميع مسارات svg إلى اللون الأسود
                svgPath.css("fill", "#000");

                // تغيير لون مسار svg الخاص بالزر النشط إلى اللون الأبيض
                if ($(this).attr("id") === "torke") {
                    svgPath.css("fill", "#fff");
                }
            });


            $("footer span:nth-child(1)").addClass("active1");
            // When the element with the ID 'se' is clicked
            $("#home").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/");
            });
            $("#home1").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/");
            });
            $("#me").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/%D9%85%D9%86-%D9%86%D8%AD%D9%86/");
            });
            $("#se").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%ae%d9%84%d9%8a%d8%ac/");
            });
  $("#mi").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/internet-speed-test-online/");
            });
  
            $("#news").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d9%85%d8%aa%d9%86%d9%88%d8%b9%d9%87/");
            });
            $("#torke").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%a7%d9%84%d8%b9%d8%a7%d8%a8/");
            });
            $("#sport").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/seo/");
            });
            $("#seicurty").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/privacy-policy/");
            });
            $("#callme").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7/");
            });
            $("#who").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86/");
            });
   $("#apk").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d9%85%d8%aa%d9%86%d9%88%d8%b9%d9%87/");
            });
     $("#game").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%a7%d9%84%d8%b9%d8%a7%d8%a8/");
            });
     $("#web").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%a7%d9%84%d8%b1%d8%a8%d8%ad-%d8%b9%d8%a8%d8%b1-%d8%a7%d9%84%d8%a5%d9%86%d8%aa%d8%b1%d9%86%d8%aa/");
            });
     $("#fre").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%ae%d9%84%d9%8a%d8%ac/");
            });
  $("#pubg").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://al3abapk.com/category/seo/");
            });
            $("#open-menu").click(function () {
                openNav();
            });

            $("#close-menu,#me,#call span,#ad,#apk,#fre,#pubg,#web,#game").click(function () {
                closeNav();
            });

            $(document).click(function (event) {
                if (!$(event.target).closest("#side-menu").length && !$(event.target).is("#open-menu")) {
                    closeNav();
                }
            });

            function openNav() {
                $("#side-menu").css("inset-inline-start", "0");
                $("#navbarClose").addClass("active5");

            }

            function closeNav() {
                $("#side-menu").css("inset-inline-start", "calc(-100%)");
                $("#navbarClose").removeClass("active5");
            }
            $("#side-menu li a").append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
            var darkMode = false;

            $("#dark").click(function () {
                darkMode = !darkMode;

            if (darkMode) {
            $("#dark").text("الوضع الضوء");
            $("#dark").attr("href", "##");
        } else {
            $("#dark").text("الوضع الداكن");
       
            // Set href values for light mode
            $("#dark").attr("href", "####");
        }
            });

        });
        window.addEventListener('resize', function () {
            var iframe = document.getElementById('myIframe');
            iframe.style.height = window.innerHeight + 'px';
        });
