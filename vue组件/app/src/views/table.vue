<template>
  <div>
    <table-render :columns="columns" :data="data"></table-render>
  </div>
</template>
<script>
  import TableRender from '../components/table/table.vue';

  export default {
    components: { TableRender },
    data () {
      return {
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editAge: '',  // 第二列输入框
        editBirthday: '',  // 第三列输入框
        editAddress: '',  // 第四列输入框
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            render: ((createElement, { row, index }) => {
              let edit;

              //  编辑
              if (this.editIndex === index) {
                edit = [
                  createElement('input', {
                    domProps: {
                      value: row.page
                    },
                    on: {
                      input: (event) => {
                        this.editAge = event.target.value;
                      }
                    }
                  })
                ]
              } else {//  默认
                edit = row.age;
              }

              return createElement('div', [
                edit
              ])
            })
          },
          {
            title: '出生日期',
            key: 'birthday',
            render: (createElement, { row, column, index }) => {
              const date = new Date(parseInt(row.birthday));
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
              
              const birthday = `${year}-${month}-${day}`;
              
              return createElement('span', birthday);
            }
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            render: ((createElement, { row, index }) => {
              //  如果当前行是编辑状态 则渲染两个按钮
              if (this.editIndex === index) {
                return [
                  createElement('button', {
                    on: {
                      click: () => {
                        this.data[index].name = this.editName;
                        this.data[index].age = this.editAge;
                        this.data[index].birthday  = this.editBirthday;
                        this.data[index].address  = this.editAddress;
                        this.editIndex = -1;
                      }
                    }
                  }, '保存'),
                  createElement('button', {
                    style: {
                      marginLeft: '6px'
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1;
                      }
                    }
                  }, '取消')
                ]
              } else {//  当前行为默认状态
                return createElement('button', {
                  on: {
                    click: () => {
                      this.editName = row.name;
                      this.editAge = row.age;
                      this.editAddress = row.address;
                      this.editBirthday = row.birthday;
                      this.editIndex = index;
                    }
                  }
                }, '修改')
              }
            })
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>