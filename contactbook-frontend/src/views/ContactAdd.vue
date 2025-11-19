<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>

    <!-- Dùng lại form chung -->
    <ContactForm :contact="contact" @submit:contact="addContact" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },

  data() {
    return {
      // Giá trị mặc định khi thêm mới
      contact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
    };
  },

  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        alert("Đã thêm liên hệ thành công!");
        this.$router.push({ name: "contactbook" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
