<template>
    <div class="nav-left nav-dd nav-province">
        <el-submenu index="3">
          <template slot="title">
              <div class="label text needsclick">จังหวัด</div>
              <span class="stext">{{pvname}}</span>
          </template>
          <div class="cb pvh">
            <el-row>
              <el-col class="nav-left nav-colume">
                <el-row>
                  <el-menu-item
                    @click="changeProvince(0)"
                    class="sector pointer">
                      ประเทศไทย
                  </el-menu-item>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคเหนือ</el-row>
                <el-row
                  v-for="pv in provinceItem[0]"
                  class="each-pv pointer"
                  :label="pv[1]"
                  :key="pv[1]">
                  <el-menu-item @click="changeProvince(pv)">
                    {{pv[1]}}
                  </el-menu-item>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคตะวันออกเฉียงเหนือ</el-row>
                <el-row>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 13"
                      class="each-pv pointer"
                      :label="provinceItem[1][n][1]"
                      :key="provinceItem[1][n][1]">
                      <el-menu-item @click="changeProvince(provinceItem[1][n])">
                        {{provinceItem[1][n][1]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 6"
                      class="each-pv pointer"
                      :label="provinceItem[1][n+13][1]"
                      :key="provinceItem[1][n+13][1]">
                      <el-menu-item @click="changeProvince(provinceItem[1][n+13])">
                        {{provinceItem[1][n+13][1]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคกลาง</el-row>
                <el-row>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 13"
                      class="each-pv pointer"
                      :label="provinceItem[2][n][1]"
                      :key="provinceItem[2][n][1]">
                      <el-menu-item @click="changeProvince(provinceItem[2][n])">
                        {{provinceItem[2][n][1]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 7"
                      class="each-pv pointer"
                      :label="provinceItem[2][n+13][1]"
                      :key="provinceItem[2][n+13][1]">
                      <el-menu-item @click="changeProvince(provinceItem[2][n+13])">
                        {{provinceItem[2][n+13][1]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคตะวันออก</el-row>
                <el-row
                  v-for="pv in provinceItem[3]"
                  class="each-pv pointer"
                  :label="pv[1]"
                  :key="pv[1]">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv[1]}}
                    </el-menu-item>
                  </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคตะวันตก</el-row>
                <el-row
                  v-for="pv in provinceItem[4]"
                  class="each-pv pointer"
                  :label="pv[1]"
                  :key="pv[1]">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv[1]}}
                    </el-menu-item>
                  </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคใต้</el-row>
                <el-row
                  v-for="pv in provinceItem[5]"
                  class="each-pv pointer"
                  :label="pv[1]"
                  :key="pv[1]">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv[1]}}
                    </el-menu-item>
                  </el-row>
              </el-col>
            </el-row>
          </div>
        </el-submenu>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
const setOfProvince =
[
  [['57', 'เชียงราย'], ['50', 'เชียงใหม่'], ['55', 'น่าน'], ['56', 'พะเยา'], ['54', 'แพร่'],
    ['58', 'แม่ฮ่องสอน'], ['52', 'ลำปาง'], ['51', 'ลำพูน'], ['53', 'อุตรดิตถ์']],
  [['46', 'กาฬสินธุ์'], ['40', 'ขอนแก่น'], ['36', 'ชัยภูมิ'], ['48', 'นครพนม'], ['30', 'นครราชสีมา'], ['38', 'บึงกาฬ'], ['31', 'บุรีรัมย์'],
    ['44', 'มหาสารคาม'], ['49', 'มุกดาหาร'], ['35', 'ยโสธร'], ['45', 'ร้อยเอ็ด'], ['42', 'เลย'], ['33', 'ศรีสะเกษ'], ['47', 'สกลนคร'],
    ['32', 'สุรินทร์'], ['43', 'หนองคาย'], ['39', 'หนองบัวลำภู'], ['37', 'อำนาจเจริญ'], ['41', 'อุดรธานี'], ['34', 'อุบลราชธานี']],
  [['62', 'กำแพงเพชร'], ['18', 'ชัยนาท'], ['26', 'นครนายก'], ['73', 'นครปฐม'], ['60', 'นครสวรรค์'], ['12', 'นนทบุรี'], ['13', 'ปทุมธานี'],
    ['14', 'พระนครศรีอยุธยา'], ['66', 'พิจิตร'], ['65', 'พิษณุโลก'], ['67', 'เพชรบูรณ์'], ['16', 'ลพบุรี'], ['11', 'สมุทรปราการ'], ['75', 'สมุทรสงคราม'],
    ['74', 'สมุทรสาคร'], ['19', 'สระบุรี'], ['17', 'สิงห์บุรี'], ['64', 'สุโขทัย'], ['72', 'สุพรรณบุรี'], ['15', 'อ่างทอง'], ['61', 'อุทัยธานี']],
  [['22', 'จันทบุรี'], ['24', 'ฉะเชิงงเทรา'], ['20', 'ชลบุรี'], ['23', 'ตราด'], ['25', 'ปราจีนบุรี'], ['21', 'ระยอง'], ['27', 'สระแก้ว']],
  [['71', 'กาญจนบุรี'], ['63', 'ตาก'], ['77', 'ประจวบคีรีขันธ์'], ['76', 'เพชรบุรี'], ['70', 'ราชบุรี']],
  [['81', 'กระบี่'], ['86', 'ชุมพร'], ['92', 'ตรัง'], ['80', 'นครศรีธรรมราช'], ['96', 'นราธิวาส'], ['94', 'ปัตตานี'], ['82', 'พังงา'], ['93', 'พัทลุง'],
    ['83', 'ภูเก็ต'], ['95', 'ยะลา'], ['85', 'ระนอง'], ['90', 'สงขลา'], ['91', 'สตูล'], ['84', 'สุราษฎร์ธานี']]
]
export default {
  name: 'Dropdown-province',
  data: function () {
    return {
      provinceItem: setOfProvince,
      pvname: 'ทั้งประเทศ'
    }
  },
  methods: {
    ...mapActions([
      'setID'
    ]),
    changeProvince: function (event) {
      console.log(event)
      if (event === 0) {
        this.pvname = 'ทั้งประเทศ'
      } else {
        this.pvname = event[1]
      }
      this.setID(event[0])
    }
  }
}
</script>

<style>
.nav-colume {
  padding: .5rem .5rem;
}
.sector {
  font-size: .8rem;
  padding: .9rem .9rem;
  font-weight: bold;
}
.each-pv {
  font-size: .8rem;
  padding: .5rem .9rem;
}
.pointer {
  cursor: pointer;
}
.pointer:hover {
  opacity: .6;
}
.pvh {
  height: 31.5rem;
}
</style>
