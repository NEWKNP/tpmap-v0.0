<template>
    <el-menu-item index="7" class="nav-right nav-item2">
        <a class="download-data-button button is-capsule is-tiny" href="#">
          <span class="icon is-ready">
            <vue-material-icon name="cloud_download" :size="20" :color="grey"></vue-material-icon>
          </span>
          <span class="button-text">ดาวน์โหลดข้อมูลชุดนี้</span>
        </a>
    </el-menu-item>
</template>

<script>
export default {
  name: 'Download'
}
</script>

<style>
.nav-right {
    float: right;
}
.nav-item2 {
    font-size: inherit;
    height: inherit;
    padding: 0.5rem 0.75rem;
}
.button {
    text-decoration: none;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1.6rem;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.25;
    padding-bottom: 0.5em;
    padding-left: 0.625em;
    padding-right: 0.625em;
    padding-top: 0.5em;
    position: relative;
    vertical-align: top;
    background-color: white;
    border: 1px solid #dbdbdb;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;
}
.button.is-capsule {
    border-radius: 0.8rem;
    padding: 0.2rem 1rem;
    font-size: 1.4rem;
}

.button.is-tiny {
    font-size: .7rem;
    height: 1rem;
}
.nav-item a, a.nav-item {
    color: #7a7a7a;
}
.button .icon {
    color: #bdbdbd;
    height: auto;
    line-height: 1;
    width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
    margin-left: calc(-0.375em - 1px);
    margin-right: 0.725em;
}
span {
    font-style: inherit;
    font-weight: inherit;
}
.button-text {
    color: #7a7a7a;
}
</style>
