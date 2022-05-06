<style scoped>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
}
/* button{
  color: #f1f1f1;
    background: linear-gradient(#3C373D,#21262A);
    font-size: 20px;
    font-weight: 600;
    height: 2em;
    width: 2em;
    padding: 0;
    margin-Right: 0.5em;
    margin-top: 1em;
    border: none;
    border-radius: 50%;
}
button:hover:enabled{
  color: #fff;
  background: linear-gradient(#FA5100,#BC1F00);
}*/
.active{
  color: #000;
  background: #63D471;
} 
</style>

<template>

  <ul class="pagination justify-content-center">
    <li class="pagination-item">
      <button
        class="btn mx-2 btn-light btn-rounded"
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        &#x3c;&#x3c;
      </button>
    </li>

    <li class="pagination-item">
      <button class="btn mx-1 btn-light btn-rounded"
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        &#x3c;
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li class="pagination-item"
      v-for="button in buttons"
      :key="button.name"
    >
      <button
        class="btn mx-1 btn-light btn-rounded"
        type="button"
        @click="onClickPage(button.name)"
        :disabled="button.isDisabled"
        :class="{ active: isPageActive(button.name) }"
      >
        {{ button.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
      class="btn mx-1 btn-light btn-rounded"
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        &#x3e;
      </button>
    </li>

    <li class="pagination-item">
      <button
      class="btn mx-2 btn-light btn-rounded"
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        &#x3e;&#x3e;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name:"pagination_base",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 2
    },    
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage >= this.totalPages
    },
    startPage() {
      // When on the first page
      if (!this.currentPage === this.totalPages) {
      const start = this.totalPages - (this.maxVisibleButtons - 1);

        if (start === 0) {
          return 1;
        } else {
          return start;
        }
      }

        // When on the last page
        if (this.currentPage === this.totalPages) {
          return this.totalPages;
        }

        // When inbetween
        return this.currentPage;
    },
    pages() {
      const range = [];
      for (
        let i = 1;
        i <= this.totalPages;
        i++
      ) {
        range.push({
          name: i,
          isDisabled: (i<1)||(i === this.currentPage)
        });
      }

      return range;
    },
    buttons() {
      const r = [];

      for(let j = this.startPage-(Math.floor(this.maxVisibleButtons/2)) ;
        j < this.startPage+ (Math.ceil(this.maxVisibleButtons/2));
        j++
        ){
          if(j>0&&j<=this.totalPages){
            r.push({
            name: j,
            isDisabled: (j<1)||(j === this.currentPage)
          });
        }
      }

      return r;
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.pages.length);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
}
</script>

