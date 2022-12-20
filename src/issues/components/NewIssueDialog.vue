<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="isOpen" position="bottom" persistent>
      <q-card style="width: 600px">
        <q-form @submit="issueMutation.mutate({ title, body, labels })">
          <q-linear-progress :value="0.6" color="secundary" />

          <q-card-section class="column no-wrap">
            <div>
              <div class="text-weight-bold">New Issue</div>
              <div class="text-grey">Fitz & The Tantrums</div>
            </div>

            <q-space />

            <div>
              <q-input
                v-model="title"
                dense
                filled
                label="Title"
                placeholder="Title"
                class="q-mb-sm"
                :rules="[(val) => !!val || 'Field is required']"
              />
              <q-select
                v-model="labels"
                dense
                filled
                multiple
                :options="props.labels"
                use-chips
                stack-label
                label="Multiple selections"
                class="q-mb-sm"
              />
              <!-- TODO: markdown editor -->
              <md-editor
                v-model="body"
                placeholder="# Markdown"
                language="en-US"
              />
            </div>
          </q-card-section>

          <q-card-actions align="left">
            <q-btn
              v-close-popup
              :disable="issueMutation.isLoading.value"
              flat
              label="Cancel"
              color="red"
              @click="$emit('onClose')"
            />
            <q-space />
            <q-btn
              v-close-popup
              :disable="issueMutation.isLoading.value"
              type="submit"
              flat
              label="Add Issue"
              color="dark"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import useIssueMutation from 'src/issues/composables/useIssueMutation';

type Props = {
  isOpen: boolean;
  labels: string[];
};
type Emits = {
  (e: 'onClose'): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const { issueMutation } = useIssueMutation();

const isOpen = ref<boolean>(false);
const title = ref<string>('');
const body = ref<string>('');
const labels = ref<string[]>([]);

watch(props, () => (isOpen.value = props.isOpen));

watch(
  () => issueMutation.isSuccess.value,
  (isSuccess) => {
    if (isSuccess) {
      title.value = '';
      body.value = '';
      labels.value = [];

      issueMutation.reset();
      emits('onClose');
    }
  }
);
</script>

<style scoped></style>
