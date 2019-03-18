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
                  :label="pv"
                  :key="pv">
                  <el-menu-item @click="changeProvince(pv)">
                    {{pv}}
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
                      :label="provinceItem[1][n]"
                      :key="provinceItem[1][n]">
                      <el-menu-item @click="changeProvince(provinceItem[1][n])">
                        {{provinceItem[1][n]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 6"
                      class="each-pv pointer"
                      :label="provinceItem[1][n+13]"
                      :key="provinceItem[1][n+13]">
                      <el-menu-item @click="changeProvince(provinceItem[1][n+13])">
                        {{provinceItem[1][n+13]}}
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
                      :label="provinceItem[2][n]"
                      :key="provinceItem[2][n]">
                      <el-menu-item @click="changeProvince(provinceItem[2][n])">
                        {{provinceItem[2][n]}}
                      </el-menu-item>
                    </el-row>
                  </el-col>
                  <el-col class="nav-left">
                    <el-row
                      v-for="n in 7"
                      class="each-pv pointer"
                      :label="provinceItem[2][n+13]"
                      :key="provinceItem[2][n+13]">
                      <el-menu-item @click="changeProvince(provinceItem[2][n+13])">
                        {{provinceItem[2][n+13]}}
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
                  :label="pv"
                  :key="pv">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv}}
                    </el-menu-item>
                  </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคตะวันตก</el-row>
                <el-row
                  v-for="pv in provinceItem[4]"
                  @change="changeProvince(pv)"
                  class="each-pv pointer"
                  :label="pv"
                  :key="pv">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv}}
                    </el-menu-item>
                  </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-row class="sector">ภาคใต้</el-row>
                <el-row
                  v-for="pv in provinceItem[5]"
                  @change="changeProvince(pv)"
                  class="each-pv pointer"
                  :label="pv"
                  :key="pv">
                    <el-menu-item @click="changeProvince(pv)">
                      {{pv}}
                    </el-menu-item>
                  </el-row>
              </el-col>
            </el-row>
          </div>
        </el-submenu>
    </div>
</template>

<script>
const setOfProvince =
[
  ['เชียงราย', 'เชียงใหม่', 'น่าน', 'พะเยา', 'แพร่', 'แม่ฮ่องสอน', 'ลำปาง', 'ลำพูน', 'อุตรดิตถ์'],
  ['กาฬสินธุ์', 'ขอนแก่น', 'ชัยภูมิ', 'นครพนม', 'นครราชสีมา', 'บึงกาฬ', 'บุรีรัมย์', 'มหาสารคาม', 'มุกดาหาร', 'ยโสธร',
    'ร้อยเอ็ด', 'เลย', 'ศรีสะเกษ', 'สกลนคร', 'สุรินทร์', 'หนองคาย', 'หนองบัวลำภู', 'อำนาจเจริญ', 'อุดรธานี', 'อุบลราชธานี'],
  ['กำแพงเพชร', 'ชัยนาท', 'นครนายก', 'นครปฐม', 'นครสวรรค์', 'นนทบุรี', 'ปทุมธานี', 'พระนครศรีอยุธยา', 'พิจิตร', 'พิษณุโลก',
    'เพชรบูรณ์', 'ลพบุรี', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระบุรี', 'สิงห์บุรี', 'สุโขทัย', 'สุพรรณบุรี', 'อ่างทอง', 'อุทัยธานี'],
  ['จันทบุรี', 'ฉะเชิงงเทรา', 'ชลบุรี', 'ตราด', 'ปราจีนบุรี', 'ระยอง', 'สระแก้ว'],
  ['กาญจนบุรี', 'ตาก', 'ประจวบคีรีขันธ์', 'เพชรบุรี', 'ราชบุรี'],
  ['กระบี่', 'ชุมพร', 'ตรัง', 'นครศรีธรรมราช', 'นราธิวาส', 'ปัตตานี', 'พังงา', 'พัทลุง', 'ภูเก็ต', 'ยะลา', 'ระนอง', 'สงขลา', 'สตูล', 'สุราษฎร์ธานี']
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
    changeProvince: function (event) {
      console.log(event)
      if (event === 0) {
        this.pvname = 'ทั้งประเทศ'
      } else {
        this.pvname = event
      }
      // this.setProvince(event)
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
