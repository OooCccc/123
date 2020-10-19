        $(function(){
            $(".st_tree").SimpleTree({
            });
            $(".menu-bar").click(function(){
                // 设置三级菜单的状态
                $(this).next('.st_tree').toggleClass('tree_show');
                //设置三明治菜单的状态
                $(this).find("span:eq(0)").toggleClass('first_span');
                $(this).find(".s2").toggleClass('sec_span');
                $(this).find("span:eq(2)").toggleClass('last_span');
            });
        });