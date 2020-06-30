<template>
  <Form title="Edit board" v-on:submit="save">
    <div class="flex flex-row">
      <div class="flex flex-col w-1/2 mb-8">
        <section class="mb-4">
          <div class="flex mb-2">
            <h4>Image</h4>
            <uploadcare
              :publicKey="$store.state.uploadcare"
              @success="onUploadSuccess"
              @error="onUploadError"
            >
              <IconButton icon="upload" name="Upload image" class="ml-2" />
            </uploadcare>
          </div>
          <img
            class="w-3/4 rounded-section"
            :src="boardForm.img"
            alt="Card image"
          />
        </section>
      </div>

      <div class="flex flex-col w-1/2">
        <InputField
          class="mb-4"
          label="Title"
          v-model="boardForm.title"
          type="text"
          v-focus
        />
        <InputField
          class="mb-8"
          label="Description"
          v-model="boardForm.desc"
          type="text"
        />
      </div>
    </div>
    <FormButton
      class="flex mr-auto ml-auto"
      label="Save"
      type="submit"
      v-on:click="save"
    />
  </Form>
</template>

<script>
import Form from '@/components/ui/atoms/Form'
import FormButton from '@/components/ui/atoms/FormButton'
import InputField from '@/components/ui/molecules/InputField'
import IconButton from '@/components/ui/molecules/IconButton'

import { captureException } from '@sentry/browser'
import Uploadcare from 'uploadcare-vue'

export default {
  name: 'board-edit',
  props: {
    board: {
      type: Object,
      required: true,
    },
  },
  components: {
    Form,
    FormButton,
    InputField,
    IconButton,
    Uploadcare,
  },
  data() {
    return {
      boardForm: {
        title: this.board.title,
        img: this.board.img,
        desc: this.board.desc,
      },
    }
  },
  methods: {
    onUploadSuccess(event) {
      this.$store.dispatch('boards/editBoard', {
        title: this.title,
        img: event.cdnUrl,
      })
    },
    onUploadError(event) {
      captureException(event)
    },
    save() {
      this.$store.dispatch('boards/editBoard', {
        title: this.board.title,
        newData: this.boardForm,
      })
      this.$emit('close')
    },
  },
}
</script>
