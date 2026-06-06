import type { Connection, Edge, Node } from 'reactflow';
import { systemNodeDefinitions } from '../../../abstract/nodeData';
import type { Capability, SystemNodeData } from '../types/playground.types';

type ConnectionValidationResult = {
  isValid: boolean;
  reason?: string;
};

const compatibleCapabilities: Partial<Record<Capability, Capability[]>> = {
  emit_request: ['receive_request'],
  emit_query: ['receive_query'],
  publish_message: ['receive_message', 'message_broker'],
};

export function validateSystemConnection(
  connection: Connection | Edge,
  nodes: Array<Node<SystemNodeData>>,
): ConnectionValidationResult {
  if (!connection.source || !connection.target) {
    return { isValid: false, reason: 'Connection must include a source and target node.' };
  }

  if (connection.source === connection.target) {
    return { isValid: false, reason: 'A node cannot connect to itself.' };
  }

  const sourceNode = nodes.find((node) => node.id === connection.source);
  const targetNode = nodes.find((node) => node.id === connection.target);

  if (!sourceNode || !targetNode) {
    return { isValid: false, reason: 'Connection references an unknown node.' };
  }

  const sourceCapabilities = systemNodeDefinitions[sourceNode.data.type].capabilities;
  const targetCapabilities = systemNodeDefinitions[targetNode.data.type].capabilities;

  const hasCompatibleCapability = sourceCapabilities.some((sourceCapability) => {
    const acceptedTargetCapabilities = compatibleCapabilities[sourceCapability] ?? [];

    return acceptedTargetCapabilities.some((targetCapability) => targetCapabilities.includes(targetCapability));
  });

  if (!hasCompatibleCapability) {
    return {
      isValid: false,
      reason: `${sourceNode.data.name} cannot initiate a valid flow to ${targetNode.data.name}.`,
    };
  }

  return { isValid: true };
}
