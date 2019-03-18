<template>
    <div class="nav1">
        <div class="in-nav1">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" class="nav-left nav-item1 none-border">
                    <a href="#" target="_blank" class="site-logo">
                        <img src="@/assets/logo@2x.png">
                        <div class="ban-text">
                            Thai People Map and Analytics Platform
                            <span class="site-logo-beta">&lt;Beta&gt;</span>
                        </div>
                    </a>
                </el-menu-item>
                <el-menu-item index="2" class="nav-right nav-item1 site-last-update">
                    <div class="label">อัพเดทข้อมูลล่าสุด</div>
                    <div class="value">18 มี.ค. 2562</div>
                </el-menu-item>
                <el-menu-item index="3" class="nav-right nav-item1 search">
                    <vue-material-icon name="search" :size="20" :color="grey"></vue-material-icon>
                </el-menu-item>
                <el-menu-item index="4" class="nav-right nav-item1 none-border">
                    <a href="#" target="_blank" class="stext">รู้จัก TPMAP</a>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav1'
}
</script>

<style>
.nav1 {
    background-color: #f9f9f9;
    height: 2.2rem;
    font-size: 1rem;
    box-shadow: 4px 0 8px rgba(33, 33, 33, 0.2);
}
.in-nav1 {
    width: 90%;
    margin: 0 auto;
}
.nav-item1 {
    font-size: inherit;
    height: inherit;
    padding: .2rem .75rem;
    border-left: 1px solid #e0e0e0;
}
.nav-left {
    float: left;
}
.nav-right {
    float: right;
}
.site-logo img {
    max-height: 16px;
    float: left;
    margin-top: .4rem;
}
img {
    max-width: 100%;
}
.ban-text {
    color: #455396;
    text-align: left;
    font-size: .6rem;
    padding-left: 1rem;
    line-height: 3;
    float: left;
}
.stext {
    font-size: .6rem;
    line-height: 3;
    text-decoration: none;
    color: #7a7a7a;
}
.search {
    padding: .4rem .5rem;
}
.site-logo-beta {
    display: inline-block;
    color: #616161;
    font-size: .6rem;
    text-transform: uppercase;
    -webkit-transform: translate(0, -4px);
    -khtml-transform: translate(0, -4px);
    transform: translate(0, -4px);
}
.site-last-update {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
}
.site-last-update .label {
    color: #b0add3;
    font-size: .6rem;
    font-weight: normal;
    margin: 0;
}
.site-last-update .value {
    color: #212121;
    font-size: .6rem;
    text-align: left;
}
.none-border {
    border-left: none;
}
</style>
