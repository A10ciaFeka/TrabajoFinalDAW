<style>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
}
button{
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
}
.active{
  color: #000;
  background: #22e83a;
}
</style>

<template>

  <ul class="pagination justify-content-center">
    <li class="pagination-item">
      <button
      
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        &#x3c;&#x3c;
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        &#x3c;
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li class="pagination-item"
      v-for="page in pages"
      :key="page.name"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        &#x3e;
      </button>
    </li>

    <li class="pagination-item">
      <button
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
      if (this.currentPage === this.totalPages) {
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

      for(let j = this.startPage-this.maxVisibleButtons ;
        j < this.startPage;
        j++
        ){
          if(j>0){
            range.push({
            name: j
          });
        }
      }
      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: (i<1)||(i === this.currentPage)
        });
      }

      return range;
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

